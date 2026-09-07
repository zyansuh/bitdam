const DB_NAME = 'bitdam'
const DB_VERSION = 1
const STORE = 'kv'

let opening: Promise<IDBDatabase> | null = null

function openBitdamDb(): Promise<IDBDatabase> {
  if (opening) return opening
  opening = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE)
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => {
      opening = null
      reject(request.error ?? new Error('IndexedDB open failed'))
    }
  })
  return opening
}

export async function idbGet<T>(key: string): Promise<T | undefined> {
  const db = await openBitdamDb()
  return new Promise((resolve, reject) => {
    const request = db.transaction(STORE, 'readonly').objectStore(STORE).get(key)
    request.onsuccess = () => resolve(request.result as T | undefined)
    request.onerror = () => reject(request.error ?? new Error('IndexedDB get failed'))
  })
}

export async function idbSet<T>(key: string, value: T): Promise<void> {
  const db = await openBitdamDb()
  return new Promise((resolve, reject) => {
    const request = db.transaction(STORE, 'readwrite').objectStore(STORE).put(value, key)
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error ?? new Error('IndexedDB put failed'))
  })
}

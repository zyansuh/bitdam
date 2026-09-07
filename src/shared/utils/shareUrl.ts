export async function shareCurrentUrl(): Promise<boolean> {
  const url = window.location.href
  const title = document.title

  if (navigator.share) {
    try {
      await navigator.share({ title, url })
      return true
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return false
    }
  }

  try {
    await navigator.clipboard.writeText(url)
    return true
  } catch {
    return false
  }
}

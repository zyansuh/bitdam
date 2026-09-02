import { Camera, Plus, X } from 'lucide-react'
import { useRef, useState } from 'react'

interface ClaimPhotoDropzoneProps {
  photos: string[]
  onAdd: (files: FileList | null) => void
  onRemove: (index: number) => void
}

export default function ClaimPhotoDropzone({ photos, onAdd, onRemove }: ClaimPhotoDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)

  return (
    <section>
      <h2 className="claim-section__title">사진 첨부</h2>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={(event) => {
          onAdd(event.target.files)
          event.target.value = ''
        }}
      />
      <button
        type="button"
        className={dragOver ? 'claim-drop claim-drop--over' : 'claim-drop'}
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(event) => {
          event.preventDefault()
          setDragOver(false)
          onAdd(event.dataTransfer.files)
        }}
      >
        <Camera size={28} strokeWidth={1.5} />
        <span>여기로 사진을 드래그하거나 클릭하여 파일을 선택하세요 (최대 5장)</span>
      </button>
      {photos.length > 0 && (
        <ul className="claim-thumbs">
          {photos.map((src, index) => (
            <li key={`${src.slice(0, 20)}-${index}`} className="claim-thumbs__item">
              <img src={src} alt="" className="claim-thumbs__media" />
              <button
                type="button"
                className="claim-thumbs__remove"
                aria-label="사진 삭제"
                onClick={() => onRemove(index)}
              >
                <X size={12} />
              </button>
            </li>
          ))}
          {photos.length < 5 && (
            <li>
              <button
                type="button"
                className="claim-thumbs__add"
                aria-label="사진 추가"
                onClick={() => inputRef.current?.click()}
              >
                <Plus size={20} />
              </button>
            </li>
          )}
        </ul>
      )}
    </section>
  )
}

import { ImagePlus, Plus, X } from 'lucide-react'
import { useRef, useState } from 'react'

interface ReviewMediaDropzoneProps {
  photos: string[]
  onAdd: (files: FileList | null) => void
  onRemove: (index: number) => void
}

export default function ReviewMediaDropzone({ photos, onAdd, onRemove }: ReviewMediaDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)

  return (
    <section>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        className="sr-only"
        onChange={(event) => {
          onAdd(event.target.files)
          event.target.value = ''
        }}
      />
      <button
        type="button"
        className={dragOver ? 'review-drop review-drop--over' : 'review-drop'}
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
        <ImagePlus size={28} />
        <span>사진/동영상 드래그 업로드</span>
        <em>최대 5장 업로드 가능 (최대 10MB 이하)</em>
      </button>
      {photos.length > 0 && (
        <ul className="review-thumbs">
          {photos.map((src, index) => (
            <li key={`${src.slice(0, 24)}-${index}`} className="review-thumbs__item">
              {src.startsWith('data:video') ? (
                <video src={src} className="review-thumbs__media" muted />
              ) : (
                <img src={src} alt="" className="review-thumbs__media" />
              )}
              <button
                type="button"
                className="review-thumbs__remove"
                aria-label="첨부 삭제"
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
                className="review-thumbs__add"
                aria-label="파일 추가"
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

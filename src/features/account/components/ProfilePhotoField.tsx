import SafeImage from '../../../shared/components/media/SafeImage'

interface ProfilePhotoFieldProps {
  preview: string
  onPick: (file: File | undefined) => void
  onClear: () => void
}

export default function ProfilePhotoField({ preview, onPick, onClear }: ProfilePhotoFieldProps) {
  return (
    <div className="settings-photo">
      {preview ? (
        <SafeImage src={preview} alt="" className="settings-photo__image" referrerPolicy="no-referrer" />
      ) : (
        <span className="settings-photo__image settings-photo__image--empty" />
      )}
      <div>
        <div className="settings-photo__actions">
          <label className="settings-photo__change">
            사진 변경
            <input
              type="file"
              accept="image/jpeg,image/png"
              className="settings-photo__file"
              onChange={(event) => onPick(event.target.files?.[0])}
            />
          </label>
          <button type="button" className="settings-photo__delete" onClick={onClear}>
            삭제
          </button>
        </div>
        <p className="settings-photo__hint">JPG, PNG 파일만 (최대 10MB)</p>
      </div>
    </div>
  )
}

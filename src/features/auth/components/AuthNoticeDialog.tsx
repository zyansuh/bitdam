import { useEffect } from 'react'
import type { AuthNotice } from '../types/authNotice'

interface AuthNoticeDialogProps {
  notice: AuthNotice | null
  onClose: () => void
}

export default function AuthNoticeDialog({ notice, onClose }: AuthNoticeDialogProps) {
  useEffect(() => {
    if (!notice) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [notice, onClose])

  if (!notice) {
    return null
  }

  return (
    <div className="auth-notice" role="alertdialog" aria-modal="true" aria-labelledby="auth-notice-title">
      <button type="button" className="auth-notice__backdrop" aria-label="닫기" onClick={onClose} />
      <div className="auth-notice__panel">
        <div className="auth-notice__accent" />
        <div className="auth-notice__body">
          <div className="auth-notice__mark" aria-hidden>
            <span className="auth-notice__mark-glyph">빚</span>
          </div>
          <h2 id="auth-notice-title" className="auth-notice__title">
            {notice.title}
          </h2>
          <p className="auth-notice__copy">{notice.body}</p>
          <div className="auth-notice__actions">
            <button type="button" className="auth-notice__confirm" onClick={onClose}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

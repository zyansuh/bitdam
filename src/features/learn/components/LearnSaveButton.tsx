interface LearnSaveButtonProps {
  saved: boolean
  onToggle: () => void
}

export default function LearnSaveButton({ saved, onToggle }: LearnSaveButtonProps) {
  return (
    <button type="button" className="learn-save" onClick={onToggle} aria-pressed={saved}>
      {saved ? '북마크됨' : '북마크'}
    </button>
  )
}

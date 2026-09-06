interface ChatComposerProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  busy: boolean
}

export default function ChatComposer({ value, onChange, onSend, busy }: ChatComposerProps) {
  return (
    <form
      className="chat-composer"
      onSubmit={(event) => {
        event.preventDefault()
        onSend()
      }}
    >
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="전통주 명인, 페어링, 시음 클래스를 물어보세요"
        disabled={busy}
      />
      <button type="submit" disabled={busy || !value.trim()}>
        보내기
      </button>
    </form>
  )
}

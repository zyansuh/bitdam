import type { ClassSession } from '../types/classSession'
import ClassSessionCard from './ClassSessionCard'

interface ClassSessionListProps {
  sessions: ClassSession[]
  isBooked: (id: string) => boolean
  onBook: (id: string) => void
}

export default function ClassSessionList({ sessions, isBooked, onBook }: ClassSessionListProps) {
  if (sessions.length === 0) {
    return <p className="class-empty">조건에 맞는 클래스가 없습니다. 필터를 바꿔 보세요.</p>
  }

  return (
    <ul className="class-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <ClassSessionCard session={session} booked={isBooked(session.id)} onBook={onBook} />
        </li>
      ))}
    </ul>
  )
}

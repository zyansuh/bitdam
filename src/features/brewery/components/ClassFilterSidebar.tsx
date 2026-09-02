import { CLASS_DURATION_OPTIONS, CLASS_LEVEL_OPTIONS } from '../data/classFilterOptions'
import type { ClassDurationBucket, ClassLevel } from '../types/classSession'
import ClassDatePicker from './ClassDatePicker'

interface ClassFilterSidebarProps {
  dateKey: string | null
  onSelectDate: (key: string | null) => void
  availableDates: Set<string>
  levelOn: Set<ClassLevel>
  onToggleLevel: (level: ClassLevel) => void
  durationOn: Set<ClassDurationBucket>
  onToggleDuration: (bucket: ClassDurationBucket) => void
}

export default function ClassFilterSidebar({
  dateKey,
  onSelectDate,
  availableDates,
  levelOn,
  onToggleLevel,
  durationOn,
  onToggleDuration,
}: ClassFilterSidebarProps) {
  return (
    <aside className="class-filters">
      <ClassDatePicker selected={dateKey} availableDates={availableDates} onSelect={onSelectDate} />
      <fieldset className="class-filters__group">
        <legend>난이도</legend>
        {CLASS_LEVEL_OPTIONS.map((option) => (
          <label key={option.id} className="class-filters__check">
            <input
              type="checkbox"
              checked={levelOn.has(option.id)}
              onChange={() => onToggleLevel(option.id)}
            />
            {option.label}
          </label>
        ))}
      </fieldset>
      <fieldset className="class-filters__group">
        <legend>소요 시간</legend>
        {CLASS_DURATION_OPTIONS.map((option) => (
          <label key={option.id} className="class-filters__check">
            <input
              type="checkbox"
              checked={durationOn.has(option.id)}
              onChange={() => onToggleDuration(option.id)}
            />
            {option.label}
          </label>
        ))}
      </fieldset>
    </aside>
  )
}

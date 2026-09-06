import { interestOptions } from '../data/mypageMock'

interface InterestChecksProps {
  selected: string[]
  onToggle: (option: string) => void
}

export default function InterestChecks({ selected, onToggle }: InterestChecksProps) {
  return (
    <fieldset className="settings-interests">
      <legend className="account-field__label">관심 주종 설정 (복수 선택)</legend>
      <div className="settings-interests__row">
        {interestOptions.map((option) => (
          <label key={option} className="settings-interests__item">
            <input type="checkbox" checked={selected.includes(option)} onChange={() => onToggle(option)} />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

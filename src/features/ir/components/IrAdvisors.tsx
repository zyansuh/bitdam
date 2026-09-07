import { IR_ADVISORS } from '../data/irPeople'

export default function IrAdvisors() {
  return (
    <section className="ir-block" id="advisors">
      <p className="ir-kicker ir-kicker--mute">ADVISORY BOARD</p>
      <ul className="ir-advisors">
        {IR_ADVISORS.map((person) => (
          <li key={person.id} className="ir-card ir-advisors__item">
            <span>{person.initials}</span>
            <div>
              <strong>
                {person.name} · {person.role}
              </strong>
              <p>{person.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

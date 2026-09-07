import { IR_LEADERS } from '../data/irPeople'

export default function IrLeaders() {
  return (
    <section className="ir-block" id="leaders">
      <p className="ir-kicker">CORE LEADERSHIP</p>
      <h2>전통주 라이프스타일을 리드하는 핵심 인재들</h2>
      <ul className="ir-leaders">
        {IR_LEADERS.map((person) => (
          <li key={person.id} className="ir-card">
            <img src={person.image} alt={`${person.name} ${person.role}`} />
            <strong>
              {person.name} · {person.role}
            </strong>
            <p>{person.bio}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

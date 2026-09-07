import { leaderPhoto } from '../../../data/mockImages'
import { IR_LEADERS, IR_ROUND, type IrPerson } from '../../ir/data/irPeople'

const KEY = 'bitdam.cms.ir'

interface IrOverlay {
  leaders?: IrPerson[]
  round?: typeof IR_ROUND
}

function readOverlay(): IrOverlay {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    return JSON.parse(raw) as IrOverlay
  } catch {
    return {}
  }
}

function writeOverlay(patch: IrOverlay): void {
  localStorage.setItem(KEY, JSON.stringify({ ...readOverlay(), ...patch }))
}

function withLocalLeaderPhoto(person: IrPerson): IrPerson {
  if (!person.image || person.image.includes('unsplash.com') || person.image.includes('images.unsplash')) {
    return { ...person, image: leaderPhoto(person.id) }
  }
  return person
}

export function readIrLeaders(): IrPerson[] {
  const stored = readOverlay().leaders
  if (!stored) return IR_LEADERS.map(withLocalLeaderPhoto)
  return stored.map((person) => {
    const seed = IR_LEADERS.find((item) => item.id === person.id)
    return withLocalLeaderPhoto({
      ...seed,
      ...person,
      name: person.name || seed?.name || person.name,
      role: person.role || seed?.role || person.role,
      bio: person.bio || seed?.bio || person.bio,
    })
  })
}

export function writeIrLeaders(leaders: IrPerson[]): void {
  writeOverlay({ leaders })
}

export function readIrRound(): typeof IR_ROUND {
  return readOverlay().round ?? IR_ROUND
}

export function writeIrRound(round: typeof IR_ROUND): void {
  writeOverlay({ round })
}

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

export function readIrLeaders(): IrPerson[] {
  return readOverlay().leaders ?? IR_LEADERS
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

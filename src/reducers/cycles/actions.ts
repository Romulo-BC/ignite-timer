import { Cycle } from './reducer'

export enum AcyionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISH = 'MARK_CURRENT_CYCLE_AS_FINISH',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: AcyionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: AcyionTypes.MARK_CURRENT_CYCLE_AS_FINISH,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: AcyionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

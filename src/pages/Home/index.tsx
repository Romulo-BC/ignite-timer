import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FromContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCoundownButton,
  TaskInput,
} from './style'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FromContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
            <option value="aaaa" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FromContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCoundownButton disabled type="submit">
          <Play />
          Começar
        </StartCoundownButton>
      </form>
    </HomeContainer>
  )
}

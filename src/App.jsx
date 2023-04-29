
import { Container } from './components/Container'
import {InputSearch} from './components/InputSearch'
import {ResultCep} from './components/ResultCep'


export const App = () =>{
  return (
    <>
      <Container>
        <InputSearch/>
        <ResultCep/>
      </Container>
    </>
  )
}



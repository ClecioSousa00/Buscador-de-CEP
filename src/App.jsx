import InputSearch from './components/InputSearch'
import ResultCep from './components/ResultCep'

function App() {
  return (
    <>
      <main className='main_container'>
        <h1 className='title'>Buscador de CEP</h1>
        <InputSearch/>
        <ResultCep/>
      </main>
    </>
  )
}

export default App


import { useEffect, useState } from 'react';
import { Container } from './components/Container'
import { InputSearch } from './components/InputSearch'
import { ResultCep } from './components/ResultCep'
import axios from 'axios';
import { Loader } from './components/Loader';

export const App = () => {

  const [cep, setCep] = useState()
  const [loading, setLoading] = useState(false)

  const handleSearch = async (input) => {
    setLoading(true)
   
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${input}/json/`)
      setCep(response.data)
    } catch {
      setCep('O CEP informado não foi encontrado')
    }
    // setLoading(false)
    setTimeout(() => {setLoading(false)},400)
  }


  return (
    <>
      <Container>
        <InputSearch handleSearch={handleSearch} />
        {/* {loading && <Loader/>}
        {cep && <ResultCep cep={cep} />} */}
        {loading ? <Loader/> : cep && <ResultCep cep={cep} />}
      </Container>
    </>
  )
}



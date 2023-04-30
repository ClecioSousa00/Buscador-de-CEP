
import { useEffect, useState } from 'react';
import { Container } from './components/Container'
import { InputSearch } from './components/InputSearch'
import { ResultCep } from './components/ResultCep'
import axios from 'axios';

export const App = () => {

  const [cep, setCep] = useState()

  const handleSearch = async (input) => {

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${input}/json/`)
      setCep(response.data)
    } catch {
      setCep('O CEP informado não foi encontrado')
    }

  }

  return (
    <>
      <Container>
        <InputSearch handleSearch={handleSearch} />
        
        {cep && <ResultCep cep={cep} />}
      </Container>
    </>
  )
}




import { useState } from 'react';

import { Container } from './components/Container'
import { InputSearch } from './components/InputSearch'
import { ResultCep } from './components/ResultCep'
import { Loader } from './components/Loader';

import { axiosInstance } from './services/axios-instance';

export const App = () => {

  const [cep, setCep] = useState()
  const [loading, setLoading] = useState(false)

  const handleSearch = async (input, event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await axiosInstance.get(`${input}/json`)
      setCep(response.data)
    } catch {
      setCep('O CEP informado não foi encontrado')
    }
    setTimeout(() => {setLoading(false)},400)
  }

  return (
    <>
      <Container>
        <InputSearch handleSearch={handleSearch} />
        {loading ? <Loader/> : cep && <ResultCep cep={cep} />}
      </Container>
    </>
  )
}



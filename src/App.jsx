
import { useState } from 'react';

import { Container } from './components/Container'
import { InputSearch } from './components/InputSearch'
import { ResultCep } from './components/ResultCep'
import { Loader } from './components/Loader';

import { axiosInstance } from './services/axios-instance';

export const App = () => {

  const [cep, setCep] = useState()
  const [loading, setLoading] = useState(false)
  const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

  const handleSearch = async (input, event) => {
    event.preventDefault()
    setLoading(true)
    try {

      if(!cepRegex.test(input)){
        throw new Error('O CEP informado é inválido. Certifique que ele tenha 8 caracteres de 0 a 9')
      }

      const response = await axiosInstance.get(`${input}/json`)
      

      if(response.data.erro){
        throw new Error('Não foi possível obter os dados')
      }
      
      setCep(response.data)

    } catch (err){
      setCep(err.message)
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



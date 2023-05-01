import './ResultCep.css'

export const ResultCep = ({cep}) =>{

    if( typeof cep == 'string'){
        return <p className='text_result'>{cep}</p>
    }

    return(
        <div className="container_result">
            <h2 className="title_result">Cep: {cep.cep}</h2>
            <span>Logradouro: {cep.logradouro ? cep.logradouro : 'Este Cep não possui Logradouro'}</span>
            <span>Bairro: {cep.bairro ? cep.logradouro : 'Este Cep não possui Bairro'}</span>
            <span>{cep.localidade} - {cep.uf}</span>
        </div>
    )
}
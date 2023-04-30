import './ResultCep.css'

export const ResultCep = ({cep}) =>{

    if( typeof cep == 'string'){
        return <p className='text_result'>{cep}</p>
    }

    return(
        <div className="container_result">
            <h2 className="title_result">Cep: {cep.cep}</h2>
            <span>Logradouro: {cep.logradouro}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
            
        </div>
    )
}
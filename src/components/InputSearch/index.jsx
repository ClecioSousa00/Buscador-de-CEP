import { useState } from 'react';
import './InputSearch.css'
import { FaSearch } from "react-icons/fa";

export const InputSearch = ({handleSearch}) =>{

    const [input, setInput] = useState('')

    return(
        <form onSubmit={(event) =>handleSearch(input,event)} className="container_input">
            <input 
                type="text" 
                placeholder="Digite seu CEP"
                onChange={event => setInput(event.target.value)}
            />
            <button type='submit'   className="button_search"> <FaSearch/> </button>
        </form>
    )  
}
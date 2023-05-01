import { useState } from 'react';
import './InputSearch.css'
import { FaSearch } from "react-icons/fa";


export const InputSearch = ({handleSearch}) =>{

    const [input, setInput] = useState('')
    
    return(
        <div className="container_input">
            <input value={input} 
                type="text" 
                placeholder="Digite se CEP"
                onChange={event => setInput(event.target.value)} />
            
            <button onClick={() => handleSearch(input)}  className="button_search"> <FaSearch/> </button>
        </div>
    )
}
import './InputSearch.css'
import { FaSearch } from "react-icons/fa";

export const InputSearch = () =>{
    return(
        <div className="container_input">
            <input type="text" placeholder="Digite se CEP" />
            <button className="button_search"> <FaSearch/> </button>
        </div>
    )
}
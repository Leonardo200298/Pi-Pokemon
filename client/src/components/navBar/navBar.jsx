import { useState } from "react";
import { useDispatch } from "react-redux";
import {getByName, filterByTypes} from "../../redux/action";
import './navBar.css'
//select para orden(asc,desc), boton filtro por tipo, boton para crear(form)
export default function NavBar({ setCurrentPage, types}){
   
    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    function handleInputChange(e){
        e.preventDefault();
		setInput(e.target.value);
    }
    const searcher =async (e)=>{
        e.preventDefault();
        dispatch(getByName(input));
        setCurrentPage(1)
        setInput('')
    } 
    const handleSelectChange = async (e)=>{
        e.preventDefault();
        dispatch(filterByTypes(e.target.value))
    }
    return (
        <div>
            <form onSubmit={(e)=>searcher(e)}>
                <input value={input} 
                name="search"
                type="text"
                onChange={(e)=>handleInputChange(e)} 
                />
                <button className="button-class" type="submit">search</button>
                <select className="button-class" name="type" onChange={handleSelectChange}>
                    <option value='all'>All-types</option>
					{types&&types.map((type) => {
						return (
							<option	
                                key={type.id}
                                value={type.name}>
                                {type.name}
                            </option>
						);
					})}
    
                </select>
            </form>
        </div>
    )
}

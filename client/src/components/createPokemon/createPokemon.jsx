import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import Home from '../Home/Home';
import './createPokemon.css'
import { postPokemon } from '../../redux/action/index'
import { v4 as uuidv4 } from 'uuid';



export default function CreatePokemon() {
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch();
    const [error, setError] = useState({})


    const [input, setInput] = useState({
        id: uuidv4(),
        name: '',
        img: '',
        life: '',
        attack: '',
        defending: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    })
  
 

    function handleSelectChange(e) {
        e.preventDefault()
        var tipo = types.find((elemento) => elemento.name === e.target.value)
        setInput({
            ...input,
            types: [...input.types, tipo.id]
        })
        

    }
    function handleInputChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value

        })
    }
    function handleInputNumber(e){
        e.preventDefault();
        if ((e.target.value > 0) && (Number(e.target.value))){
            setInput({
                ...input,
                [e.target.name]: e.target.value
                
            })
                    
        }else{
            setError({
                ...input,
                [e.target.name]: e.target.value
                
            })
        }
    }
    function handleForm(e) {
        e.preventDefault()
 
        dispatch(postPokemon(input))
        setInput({});

    }
    return (
        <div className='content-page-form'>
            <Home />
            <h1>Create your Pokemon!!</h1>
            <form onSubmit={(e) => handleForm(e)} className="content-form" action="">
                <input onChange={(e) => handleInputChange(e)} name="name" placeholder='Name' type="text" />
                <input  onChange={(e) =>handleInputNumber(e)} name="life" placeholder='Life' type="text" />
                {error?<p>invalid type</p>:null}
                <input onChange={(e) =>handleInputNumber(e)} name="attack" placeholder='Attack' type="text" />
                {error?<p>invalid type</p>:null}
                <input onChange={(e) => handleInputChange(e)} name="img" placeholder='Img' type="text" />
                <input onChange={(e) =>handleInputChange(e)} name="defending" placeholder='Defending' type="text" />
                
                <input onChange={(e) =>handleInputChange(e)} name="speed" placeholder='Speed' type="text" />
                
                <input onChange={(e) =>handleInputChange(e)} name="height" placeholder='Height' type="text" />
                
                <input onChange={(e) =>handleInputChange(e)} name="weight" placeholder='Weight' type="text" />
                

                <div className='div-prueba'>
                    <select name="types" onChange={(e) => handleSelectChange(e)}>
                        <option value='all'>All-types</option>
                        {types && types.map((type) => {
                            return (
                                <option
                                    key={type.id}
                                    value={type.name}>
                                    {type.name}
                                </option>
                            );
                        })}

                    </select>


                </div>

                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

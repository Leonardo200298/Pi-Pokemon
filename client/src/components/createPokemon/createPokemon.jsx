import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import Home from '../Home/Home';
import './createPokemon.css'
import { postPokemon } from '../../redux/action/index'
import { v4 as uuidv4 } from 'uuid';



export default function CreatePokemon() {
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch();
    const [error, setError] = useState(false)


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
        console.log(input.types)

    }
    function handleInputChange(e) {
        e.preventDefault();
        console.log(e.target.name)
        setInput({
            ...input,
            [e.target.name]: e.target.value

        })
    }
    function handleForm(e) {
        e.preventDefault()
        console.log(input)
        dispatch(postPokemon(input))
        setInput({});

    }
    return (
        <div className='content-page-form'>
            <Home />
            <h1>Create your Pokemon!!</h1>
            <form onSubmit={(e) => handleForm(e)} className="content-form" action="">
                <input onChange={(e) => handleInputChange(e)} name="name" placeholder='Nombre' type="text" />
                <input  onChange={(e) =>handleInputChange(e)} name="life" placeholder='life' type="text" />
                
                <input onChange={(e) =>handleInputChange(e)} name="attack" placeholder='attack' type="text" />
                
                <input onChange={(e) => handleInputChange(e)} name="img" placeholder='img' type="text" />
                <input onChange={(e) =>handleInputChange(e)} name="defending" placeholder='defending' type="text" />
                
                <input onChange={(e) =>handleInputChange(e)} name="speed" placeholder='speed' type="text" />
                
                <input onChange={(e) =>handleInputChange(e)} name="height" placeholder='height' type="text" />
                
                <input onChange={(e) =>handleInputChange(e)} name="weight" placeholder='weight' type="text" />
                

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

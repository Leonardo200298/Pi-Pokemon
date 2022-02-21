import { Link } from "react-router-dom";


import './cards.css'


export default function Cards({ name, types, img, attack, keyID }) { 
    return (
        <div className="container-cards">

            <div>
                {console.log(name)}
                <Link to={`/pokemons/detail/${keyID}`}>
                    <h1>{name}</h1>
                </Link>
                <h3>Attack:{attack}</h3>
            </div>
            <img src={img} alt={name}></img>


            <div>types:
                {types && types.map((elemento) => (
                    typeof keyID === 'string' ?
                        <span key={elemento.id}> {elemento.name}</span>
                        : <span key={elemento}> {elemento}</span>))}
            </div>


        </div>
    )
}

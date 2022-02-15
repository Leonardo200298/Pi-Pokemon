import './cards.css'

export default function Cards({ name, types, img, attack, keyID }) {
    return (
        <div className="container-cards">
            <div>
                <h1>{name}</h1>
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
{/*  {types&&types.map((elemento)=>(
                         <span>{elemento.name}</span>
                     ))} */}
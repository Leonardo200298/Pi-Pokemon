import './cards.css'

export default function Cards({ name, types, img, attack }) {
    return (
        <div className="container-cards">
            <div>
                <h1>{name}</h1>
                <h3>Attack:{attack}</h3>
            </div>
            <img src={img} alt='poke-img'></img>
            <div><h4>Types</h4>
                {types.length && types.map((elemento) => (
                    <span> {elemento}</span>
                ))}
            </div>
        </div>
    )
}
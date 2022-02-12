import './createPokemon.css'

export default function CreatePokemon() {
    return (
        <div className='content-page-form'>
            <h1>Create your Pokemon!!</h1>
            <form className="content-form" action="">
                <input placeholder='Nombre' type="text" />
                <input placeholder='type' type="text" />

                <input placeholder='attack' type="number" />

                <input placeholder='img' type="text" /> 
                <button className='button-create'>Create</button>

            </form>
        </div>
    )
}
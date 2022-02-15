import { Link } from 'react-router-dom';
import './home.css'

export default function Home(){
    return (
        <div className='button-home'>
            <Link to='/pokemons'>
                <button>Home</button>
            </Link>
        </div>
    )
}
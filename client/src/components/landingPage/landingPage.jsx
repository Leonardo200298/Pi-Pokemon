import img from '../../images/gif-landing-pika.gif';
import { Link } from 'react-router-dom';
import './styleLanding.css'

export default function LandingPage(){
    return (
        <div className='container'>
            <img className='clase-imagen' src={img} alt="gif-pikachu" />
            <Link to='/pokemons'>
                <button>Enter</button>
            </Link>
        </div>
    )
}
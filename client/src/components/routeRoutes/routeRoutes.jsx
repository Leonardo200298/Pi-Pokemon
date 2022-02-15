import {Routes,Route} from 'react-router';
import Pokemons from '../../components/pokemons/pokemons';
import LandingPage from '../landingPage/landingPage';
import CreatePokemon from '../createPokemon/createPokemon';
import Home from '../Home/Home';

export default function RoutesRoute() {
    return (
        <div>
            <Routes> 
                <Route path='/' element={<LandingPage/>}/>
                <Route exact path='/pokemons' element={<Pokemons/>} />
                <Route path='/pokemons/createForm' element={<CreatePokemon/>}/>
                <Route path='/pokemons' element={<Home/>}/>
            </Routes>
            
        </div>
    )
}
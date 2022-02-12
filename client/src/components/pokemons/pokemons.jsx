import { getByTypes, getPokemons, orderBy } from "../../redux/action"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import Paged from "../Paged/paged";
import Cards from "../Cards/cards";
import ButtonToForm from "../buttonToForm/buttonToForm";
import Loading from "../../components/Loading/loading";
import NavBar from "../navBar/navBar";
import FilterAscDesc from "../filterAscDesc/filterAscDesc";
import './pokemons.css'

export default function Pokemons() {
    const poquemoncitos = useSelector((state) => state.allPokemons)
    const pokemon = useSelector((state)=>state.pokemon)
    const types = useSelector((state)=>state.types)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [pokePerPage] = useState(12);
    const lastPoque = currentPage * pokePerPage;
    const firstPoque = lastPoque - pokePerPage;
    const pokeGap = poquemoncitos.slice(firstPoque, lastPoque);
    const paged = (number) => {
        setCurrentPage(number)
    }

    useEffect(() => {//ejecuta algo mientras se renderiza la pagina 
        dispatch(getPokemons())
        dispatch(getByTypes())
    }, [dispatch])

    return (
        <div className="container-home">
            <ButtonToForm/>
            <NavBar
                types={types}
                setCurrentPage={setCurrentPage}
                    
            /> 
            <FilterAscDesc
                orderBy={orderBy}
                setCurrentPage={setCurrentPage}
            />
            <Paged
                poquemoncitos={poquemoncitos.length}
                pokePerPage={pokePerPage}
                paged={paged}
            />
            <div className="main-containers">
                {
                    //muestra un solo poquemon
                pokemon.length? pokemon.map((pokemon)=>{
                    return (
                        <div>
                            <Cards
                                key={pokemon.id}
                                name={pokemon.name}
                                attack={pokemon.attack}
                                types={pokemon.types}
                                img={pokemon.img}
                            />
                        </div>
                    )
                }):
                //muestra los 12
                pokeGap.length ? pokeGap.map((pokemon) => {
                    return (
                        <div>
                            <Cards
                                key={pokemon.id}
                                name={pokemon.name}
                                attack={pokemon.attack}
                                types={pokemon.types}
                                img={pokemon.img}
                            />
                        </div>
                    )
                }) : <Loading/>
                }
            </div>
        </div>
    )
}

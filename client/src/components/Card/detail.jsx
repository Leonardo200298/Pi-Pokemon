import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getDetailById } from '../../redux/action/index'
import Loading from '../Loading/loading'
import './card.css'

export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detailPokemon = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getDetailById(id))
    }, [dispatch])

    return (
        <div className="container-cards">
            {detailPokemon ? (
                <div>
                    <h1>{detailPokemon.name}</h1>
                    <img src= {detailPokemon.img} alt="" />
                    <h1>Attack:{detailPokemon.attack}</h1>
                    <h1>Defending:{detailPokemon.defending}</h1>
                    <h1>Speed:{detailPokemon.speed}</h1>
                    <h1>Height:{detailPokemon.height}</h1>
                    <h1>Weight:{detailPokemon.weight}</h1>
                </div>
            ) : <Loading />}
        </div>
    )
}
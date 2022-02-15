import {
    GET_BY_NAME,
    GET_POKEMONS,
    GET_BY_TYPES,
    FILTER_BY_TYPES,
    ORDER_BY,
    CREATE_POKEMON

} from '../action'

const initialState = {
    pokemon: [],
    allPokemons: [],
    types: [],
    backUpPokemon: [],
    orderBy: []

}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_POKEMONS: return {
            ...state,
            backUpPokemon: payload,
            allPokemons: payload,
        }
        case GET_BY_NAME: return {
            ...state,
            pokemon: payload
        }
        case GET_BY_TYPES: return {
            ...state,
            types: payload
        }
        case FILTER_BY_TYPES: {
            const poke = state.backUpPokemon.filter((elemento) => {
                return elemento.types.includes(payload)
            })
            return {
                ...state,
                pokemon: [],
                allPokemons: poke
            }
        }
        case ORDER_BY: {
            console.log(payload)
            let orderSort = [...state.allPokemons];
            if (payload === 'ascend') {
                orderSort.sort((a, b) => a.name.localeCompare(b.name))//a.name-b.name 
            }
            if (payload === 'descendant') {
                orderSort.sort((a, b) => b.name.localeCompare(a.name))
            }
            if (payload === 'attack-up') {
                orderSort.sort((a, b) => {
                    if (a.attack > b.attack) {
                        return -1
                    }
                    if (a.attack < b.attack) {
                        return 1
                    }
                    return 0
                })
            }
            if (payload === 'attack-down') {
                orderSort.sort((a, b) => {
                    if (a.attack > b.attack) {
                        return 1
                    }
                    if (a.attack < b.attack) {
                        return -1
                    }
                    return 0
                })
            }

            return {
                ...state,
                allPokemons: orderSort
            }
        }
        case CREATE_POKEMON: {
            return {
                ...state,
                backUpPokemon: payload,
                allPokemons: payload,
            }
        }
        default: return state
    }
}

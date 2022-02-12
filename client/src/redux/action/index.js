export const GET_BY_NAME = "GET_BY_NAME";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_BY_TYPES = "GET_TYPES";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";
export const POKEMON_CREATED = "POKEMON_CREATED";
export const ORDER_BY = "ORDER_BY";
export const POST_POKEMON = "POST_POKEMON";
const BACK = 'http://localhost:3001/pokemons/'
const axios = require('axios');



export function getPokemons(){
  return async function (dispatch){
    const {data} = await axios.get(BACK)
    dispatch({type:GET_POKEMONS, payload:data})
  }
}

export function getByName(name){
  return async function (dispatch){
    const {data} =await axios.get(BACK + "?name=" + name)
    dispatch({type:GET_BY_NAME, payload:data})
  }
 

}
export function getByTypes(){
  return async function(dispatch){
    const {data} = await axios.get('http://localhost:3001/types/')
    dispatch({type:GET_BY_TYPES, payload:data})
  }
}
export function filterByTypes(type){
  return function(dispatch){
    dispatch({type:FILTER_BY_TYPES, payload:type})
  }
}
export function orderBy(payload){
  return function(dispatch){
    dispatch({type:ORDER_BY, payload})
  }
}
export function createdPokemon(payload){
  return function(dispatch){
    dispatch({type:POKEMON_CREATED, payload})
  }
}
export function postPokemon(payload){
  return async function (dispatch){
    const {data} = axios.post(BACK + payload)
    dispatch({type:POST_POKEMON, payload:data})
  }
}
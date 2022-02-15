export const GET_BY_NAME = "GET_BY_NAME";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_BY_TYPES = "GET_TYPES";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const ORDER_BY = "ORDER_BY";
const BACK = 'http://localhost:3001/pokemons/'
const axios = require('axios');



export function getPokemons(){
  return async function (dispatch){
    const {data} = await axios.get(BACK)
    console.log(data)
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
export function postPokemon(payload){

  try{
    return async function (){
      await axios.post(BACK, payload)
    }
  }catch(error){
    console.log(error)
  }
}
const axios = require("axios");
const {getAllPokemosDb} = require('../helperFunctions/helperFunction');
const { response } = require("express");
const URL = 'https://pokeapi.co/api/v2/pokemon/'

async function getPokeApi(){
    var pokemones = [];
    var pokemons;
    for (let i = 1; i <= 40; i++) {
        const { data } = await axios.get(URL + i)
        pokemones.push(data)
    }
    await Promise.all(pokemones).then((response) => {
        pokemons = response.map((info) => {
            return ({
                name: info.name,
                id: info.id,
                img: info.sprites.other.dream_world.front_default,
                force:info.stats[1].base_stat,
                defending: info.stats[2].base_stat,
                speed:info.stats[5].base_stat,
                height: info.height,
                weight:info.weight
                
            });
           
        });
        /* console.log(pokemons) */
       // return pokemons;
    })
    return pokemons;
}
async function getAllPokemons(req, res) {
    try{
        /* const api = await getPokeApi()
        const db = await getAllPokemosDb() */
        const [db] = await Promise.all([getAllPokemosDb()])
        /* console.log(api) */
        /* console.log(db) */
        const allPoke = [...db];
        if (req.query.name) {
            var prueba = await findByName(allPoke, req.query.name)
            console.log('entre gil')
            return res.send(prueba);
        }
       res.send(allPoke);
    }catch{(error)=>{
        console.log(error)
    }}
 }
async function findByName(allPoke, name){
    var pokeFilter = allPoke.filter((pokem)=>{
        return pokem.name === name
    })
    if (!pokeFilter.length){
        let info = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
		info = info.data;
		return (pokemon = [
			{
				name: info.name,
				id: info.id,
				img: info.sprites.other.dream_world.front_default,
				hp: info.stats[0].base_stat,
				attack: info.stats[1].base_stat,
				defense: info.stats[2].base_stat,
				speed: info.stats[3].base_stat,
				types: info.types.map((t) => t.type.name),
				weight: info.weight,
				height: info.height,
			},
		]);
    }
    return pokeFilter;
}

async function getPokemonById(req, res) {  
    const { id } = req.params;
    let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    var poke = {
        name: data.name,
        id: data.id,
        img: data.sprites.other.dream_world.front_default,
        force:data.stats[1].base_stat,
        defending: data.stats[2].base_stat,
        speed:data.stats[5].base_stat,
        height:data.height,
        weight:data.weight
    }
    res.send(poke)
}


module.exports = {
    getAllPokemons,
    getPokemonById,
    
}

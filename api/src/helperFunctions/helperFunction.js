
const {Pokemon,Type} = require('../db')


async function getAllPokemosDb(){
    const poke =await Pokemon.findAll({
        include:{
			model: Type
        }
    }) 
  
    return poke
}

/* const getPokemonDetails = async (id) => {
	let poke = null;
	if (id.length < 10) {
        
		poke = await getPokemonByIdByApi(id);
	} else {
		poke = await getPokemonDbByID(id);
	}
	return poke;
}; */
module.exports = {
    getAllPokemosDb,
  
    
}

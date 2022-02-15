const {Type} = require('../db')
const {Pokemon} = require('../db')

async function getAllPokemosDb(){
    const poke =await Pokemon.findAll({
        include:{
			model: Type
        }
    }) 
  
    return poke
}
module.exports = {
    getAllPokemosDb,

    
}

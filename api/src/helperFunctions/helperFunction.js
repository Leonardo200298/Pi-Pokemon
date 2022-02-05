const {Type} = require('../db')
const {Pokemon} = require('../db')

async function getAllPokemosDb(){
    const poke =await Pokemon.findAll({
        include:{
            model:Type
        }
    })
   /*  .then((response) => response)
		.then((poke) =>
			poke.map((p) => {
				return {
					id: p.id,
					name: p.name,
					img:
						p.img ||
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg',
					types: p.types.map((t) => t.name),
					attack: p.attack || 0,
				};
			})
		); */
    
    return poke
}
module.exports = {
    getAllPokemosDb,

    
}

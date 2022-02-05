const axios = require("axios");
const { Pokemon, Type} = require('../db')


async function getTypes(req,res){
    const allTypes =await Type.findAll()
    console.log(allTypes)
    res.send(allTypes);
}
/* async function unaFuncion(req,res){
    const tata =await getTypes()
    return res.send(tata)
} */
async function dbTypes(){
    const {data} =await axios.get('https://pokeapi.co/api/v2/type')
    data.results.map((n)=>{
        Type.findOrCreate({
            where:{
                name:n.name
            }
        })
    })
}

const createPokemon = async (req, res) => {
     const { name, id, img, life, force, defending, speed, height, weight, types } = req.body;
        
    const poke = await helperCreatePokemon(name,id,img, life, force, defending,speed,height,weight,types);
    poke === 'error'
        ? res.status(400).send({error:'404 Not found'})
        : res.status(200).send({success:'Pokemon created'});
}
const helperCreatePokemon = async (name,id,img,life,force,defending,speed,height,weight,types) => {
    try{
        if (name) {
            let poke = await Pokemon.create({
                name: name.toLowerCase(),
                id,
                life,
                img,
                force,
                defending,
                speed,
                height,
                weight,
            });
            console.log(poke)
            await poke.addType(types);
        }else {
            return 'error';
            }
        }catch(err){
            console.log(err)
            console.log('Error in createPokemon')
        }     
};

/* para probar el post
{
    "name":"name", 
    "img": "img",
    "force":"force",
    "defending":"defending",
    "speed":"speed",
    "height":"height",
    "weight":"weight"
}
http://localhost:3001/pokemons/
*/
module.exports = {
    createPokemon,
    getTypes,
    dbTypes
}
import { Link } from "react-router-dom";

export default function ButtonToForm(){
  return (
      <div>
          
          <Link to='/pokemons/createForm'>
              <button>Create your own Pokemon!!</button>
          </Link>
      </div>
  )
}
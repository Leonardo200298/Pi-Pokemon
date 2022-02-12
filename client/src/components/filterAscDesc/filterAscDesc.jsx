/* import { useState } from "react"; */
import { useDispatch } from "react-redux";


export default function FilterAscDesc({orderBy, setCurrentPage}){
    const dispatch = useDispatch();
    /* const [order, setOrder] = useState("")
 */
    function handleSelect(e){
        e.preventDefault();
        dispatch(orderBy(e.target.value))
        setCurrentPage(1)
        /* setOrder(e.target.value) */
    }

    return(
        <div>
            <select name="type" onChange={(e)=>handleSelect(e)}>
                <option >order</option>
                <option value="ascend">Ascend</option>
                <option value="descendant">Descendant</option>
                <option value="attack-up">Attack-up</option>
                <option value="attack-down">Attack-down</option>
            </select>
        </div>
    )
}
/*  <option value="ascend">Ascend</option>
                <option value="descendant">Descendant</option>
                <option value="attack-up">Attack-up</option>
                <option value="attack-down">Attack-down</option> */
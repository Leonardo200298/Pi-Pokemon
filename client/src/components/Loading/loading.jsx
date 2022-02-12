import img from '../../images/loading.gif'
import './loading.css'

export default function Loading(){
    return (
        <div >
            <img className='loading-gif' src={img} alt="loading" />
        </div>
        
    )
}
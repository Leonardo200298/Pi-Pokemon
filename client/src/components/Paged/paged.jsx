import './paged.css'

export default function Paged ({pokePerPage,paged,poquemoncitos}){
    const numberPag = []
    for(let i=1; i<=Math.ceil(poquemoncitos/pokePerPage); i++){
        numberPag.push(i)
    }
    return (
        <div className="content" >
            <div className='style-button' >
                {numberPag&&numberPag.map(n =>(
                    <>
                        <a onClick={() => paged(n)} key={n}>{n} </a>
                    </>
                ))
                }
            </div>
        </div>
    )
}

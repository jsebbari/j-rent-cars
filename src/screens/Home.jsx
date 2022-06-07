import {useEffect} from 'react'
import '../styles/Home.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import {Link} from "react-router-dom"





function Home() {
    useEffect (() => {
        Aos.init({duration: 500})
    },[])
    return (

        <div id="home">
            <main id='presentation'>
                <h1 id="title-home">Louez la liberté</h1>
                 <Link className='btn btn-warning mt-2 ' to= "/vehicules" > Voir tous les modèles</Link>
            </main>
        </div>

    )
}

export default Home

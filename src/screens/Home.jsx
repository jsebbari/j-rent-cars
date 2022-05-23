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
            <div id='presentation'>
                <h1 id="title-home">Louez la liberté</h1>
                 <Link to= "/vehicules" id="link-to-products"> {`> Tous les modèles`}</Link>
            </div>
        </div>

    )
}

export default Home

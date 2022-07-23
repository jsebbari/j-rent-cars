import {useState} from 'react'
import "../styles/Dashboard.css"
import { Link, useNavigate} from 'react-router-dom';
import {FaCalendarAlt, FaUserEdit, FaRegCalendarPlus} from "react-icons/fa";
import {GiCarKey} from "react-icons/gi";
import ItemInfoDashboard from './ItemInfoDashboard';
import {uid} from 'react-uid'
import {signOut} from "firebase/auth"
import { auth} from '../firebase/firebase.config';
import { Button } from 'react-bootstrap';



export default function () {

// navigation____________________________________________
const navigate = useNavigate();

// useState______________________________________________
const [showItemInfo, setShowItemInfo] = useState(false)
const [activeTab, setActiveTab] = useState(null)

    const infoUserIcon = <FaUserEdit size={40}  className='items-icon'/>
    const keyCarIcon = <GiCarKey size={40} className='items-icon'/>
    const calendarIcon = <FaCalendarAlt size={35} className='items-icon'/>
    const newBookIcon = <FaRegCalendarPlus size={35} className='items-icon'/>

    const itemsDashboard = [
        {icon: infoUserIcon, title: "Mes informations"},
        {icon: calendarIcon, title: "Réservation(s) à venir"},
        {icon: keyCarIcon, title: "Réservation(s) en cours"},
        {icon: newBookIcon, title: "Réserver",link:"/vehicules"}

    ]

    const showInfoItem = (title) => {
        setShowItemInfo(true)
        setActiveTab(title)
    }
    const displayItems = itemsDashboard.map((item) => {
        const {icon, title, link} = item
       return link? <li key={uid(item)}><Link to={link}>{icon}<p className='item-title-dashboard'>{title}</p></Link></li>
       : <li key={uid(item)} onClick={()=> showInfoItem(title)} className={activeTab === title? "text-warning":null}>{icon}<p className='item-title-dashboard'>{title}</p></li>
    })

// functions_____________________________________________
const logOut = async() => {
    try {
        await signOut(auth)
        navigate('/connexion')
    } catch (error) {
        console.error(error)
    }

}
    

  return (
    <div className='Dashboard'>
        <h1 className='dashboard-title'>Tableau de bord</h1>
        <Button onClick = {logOut}  variant="outline-danger">Se déconnecter</Button>
        <div className='dashboard-bookings'>
            <ul className='items-list-dashboard'>
                {displayItems}
            </ul>
            {showItemInfo&&<ItemInfoDashboard activeTab={activeTab} showItemInfo={showItemInfo} setShowItemInfo={setShowItemInfo} setActiveTab={setActiveTab}/>}
        </div>
    </div>
  )
}

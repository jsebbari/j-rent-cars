import {useState} from 'react'
import "../styles/Dashboard.css"
import { Link } from 'react-router-dom';
import {FaCalendarAlt, FaUserEdit, FaCarAlt, FaRegCalendarPlus} from "react-icons/fa";
import {GiCarKey} from "react-icons/gi";
import ItemInfoDashboard from './ItemInfoDashboard';
import {uid} from 'react-uid'



export default function () {

const [showItemInfo, setShowItemInfo] = useState(false)
const [activeTab, setActiveTab] = useState(null)

    const infoUserIcon = <FaUserEdit size={40}  className='items-icon'/>
    const keyCarIcon = <GiCarKey size={40} className='items-icon'/>
    const calendarIcon = <FaCalendarAlt size={35} className='items-icon'/>
    const newBookIcon = <FaRegCalendarPlus size={35} className='items-icon'/>

    const itemsDashboard = [
        {icon: infoUserIcon, title: "Mes informations"},
        {icon: calendarIcon, title: "Réservation à venir"},
        {icon: keyCarIcon, title: "Réservation en cours"},
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

    

  return (
    <div className='Dashboard'>
        <h1 className='dashboard-title'>Tableau de bord</h1>
        <div className='dashboard-bookings'>
            <ul className='items-list-dashboard'>
                {displayItems}
            </ul>
            {showItemInfo&&<ItemInfoDashboard showItemInfo={showItemInfo} setShowItemInfo={setShowItemInfo} setActiveTab={setActiveTab}/>}
        </div>
    </div>
  )
}

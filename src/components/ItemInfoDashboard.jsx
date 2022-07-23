import "../styles/ItemInfoDashboard.css"
import { CloseButton } from 'react-bootstrap';
import CurrentBookings from "./dashboardCompnents/CurrentBookings";
import InfosUser from "./dashboardCompnents/InfosUser";
import UpcomingBookings from "./dashboardCompnents/UpcomingBookings";


export default function ItemInfoDashboard({showItemInfo, setShowItemInfo, setActiveTab, activeTab}) {

  const componentToReturn = (tab) => {
    
    switch(tab) {

    case "Mes informations":
      return <InfosUser/>
      break;
    case "Réservation(s) à venir":
      return <UpcomingBookings/>
      break;
    case "Réservation(s) en cours":
      return <CurrentBookings/>
       break;

  }}
  
  return (

      <div className='text-item'>
          <CloseButton
          className='close-btn-dashboard'
          onClick= {()=>{setShowItemInfo(false); setActiveTab(null)} }
              />
           <h1>{activeTab}</h1>
           {componentToReturn(activeTab)}
      </div>

  )
}

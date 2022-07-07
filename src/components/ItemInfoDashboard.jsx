import "../styles/ItemInfoDashboard.css"
import { CloseButton } from 'react-bootstrap';


export default function ItemInfoDashboard({showItemInfo, setShowItemInfo, setActiveTab}) {
  return (

      <div className='text-item'>
          <CloseButton
          className='close-btn-dashboard'
          onClick= {()=>{setShowItemInfo(false); setActiveTab(null)} }
              />
      </div>

  )
}

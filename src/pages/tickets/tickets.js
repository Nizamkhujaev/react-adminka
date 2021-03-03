import SideBar from '../../containers/Sidebar/sidebar';
import Header from '../../containers/header/header';
import TiketList from "../../containers/TicketsList/ticketsList"

import './main.scss'

const Tickets = () => {
    return (
        
        <div className="tickets">
        {/* <SideBar/> */}
            <div className="content">
                {/* <Header title="Tickets"/> */}
                <TiketList/>
            </div>
        </div>

        
        
    )
}

export default Tickets;
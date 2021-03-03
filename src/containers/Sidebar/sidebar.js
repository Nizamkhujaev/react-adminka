// import { useState } from 'react';
import SaidBarBtn from  '../../components/SideBarBtn/SideBarBtn';

import {
    ChartIcon,
    Ticketicon,
    IdeaIcon,
    ArticlesIcon,
    AgentsIcon,
    SettingsIcon,
    SubsIcon,
    ContactIcon
} from '../../assets/styles/icons/icon'

import { Link } from 'react-router-dom'

import Logo from "../../assets/styles/icons/logo.svg";

import './main.scss'

const SideBar = ({activePage, setActivePage}) => {

    // const [activePage, setActivePage] = useState('');

    return(
        <div className="sidebar">

            <div className="logo-holder">
                <img src={Logo} alt="Logo" className="logo"/>
                <a href="javascript:void(0)" className="logo-name">Dashboard Kit</a>
            </div>

            <Link to="/Overview">
                <SaidBarBtn
                    title="Overview"
                    icon={<ChartIcon/>}
                    active={activePage == 'Overview'}
                    onClick={() => setActivePage('Overview')}
                />
            </Link>

            <Link to="/Tickets">
                <SaidBarBtn
                    title="Tickets"
                    icon={<Ticketicon/>}
                    active={activePage == 'Tickets'}
                    onClick={() => setActivePage('Tickets')}
                />
            </Link>
            
            <Link to="/Idea">
                 <SaidBarBtn
                    title="Ideas"
                    icon={<IdeaIcon/>}
                    active={activePage == 'Idea'}
                    onClick={() => setActivePage('Idea')}
                 />
            </Link>
            
            <SaidBarBtn title="Contacts" icon={<ContactIcon/>} onClick={() => setActivePage('Contacts')}/>
            <SaidBarBtn title="Agents" icon={<AgentsIcon/>} onClick={() => setActivePage('Agents')}/>
            <SaidBarBtn title="Articles" icon={<ArticlesIcon onClick={() => setActivePage('Articles')}/>}/>
            <SaidBarBtn title="Settings" icon={<SettingsIcon/>} onClick={() => setActivePage('Settings')}/>
            <SaidBarBtn title="Subscription" icon={<SubsIcon/>} onClick={() => setActivePage('Subscription')}/>
        </div>
    )
} 

export default SideBar;
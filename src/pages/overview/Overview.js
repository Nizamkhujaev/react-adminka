import './overview.scss';

import SideBar from '../../containers/Sidebar/sidebar';
import Header from '../../containers/header/header';
import Card from '../../components/Cards/Cards';
import Statis from '../../containers/statistika/Statistika';
import Unsolwed from '../../components/unsolwed/unsolwed';
import Tasks from '../../containers/Tasks/Tasks'

const Overview = () => {
    return (
        <div className="overview">
            {/* <SideBar/> */}

            <div className="main-content">
                {/* <Header title="Overview"/> */}
                <Card/>

                <Statis/>

                <div className="main-content-bottom">
                    <Unsolwed/>
                    <Tasks/>
                </div>
            </div>
            
        </div>
    )
}

export default Overview;
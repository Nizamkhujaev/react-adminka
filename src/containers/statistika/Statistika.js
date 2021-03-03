import './statistika.scss'
import StatisItem from '../../components/statisItem/statisItem'

import Graph from '../../assets/styles/graph.png'

const Statistica = () => {
    return (
        <div className="main-statis">
            <div className="main-statis-left">
                <div className="main-statis-left-top">
                    <div className="main-statis-left-top-left">
                        <h3 className="main-statis-left-top__title">
                        Today’s trends
                        </h3>
                        <h5 className="main-statis-left-top__text">
                        as of 25 May 2019, 09:41 PM
                        </h5>
                    </div>
                    <div className="main-statis-left-top-right">
                        <h3 className="today">
                            Today
                        </h3>

                        <h3 className="yesterday">
                            Yesterday
                        </h3>
                    </div>
                </div>

                <img src={Graph} alt=""/>
            </div>
            <div className="main-statis-right">
                <StatisItem title="Resolved" number="449"/>
                <StatisItem title="Received" number="426"/>
                <StatisItem title="Average first response time" number="33m"/>
                <StatisItem title="Average response time" number="3h 8m"/>
                <StatisItem title="Resolution within SLA" number="94%"/>
            </div>
        </div>
    )
}

export default Statistica;
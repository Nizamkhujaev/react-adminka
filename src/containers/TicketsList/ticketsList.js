import "./main.scss";
 import GroupList from '../../components/group/Group'

import Sort from '../../assets/styles/icons/sort.svg'
import Filter from '../../assets/styles/icons/filter.svg' ;
import Drop from '../../assets/styles/icons/dropdown.svg';
import Arrows from '../../assets/styles/icons/Arrows.svg'

import First from '../../assets/styles/avaimages/1.png';
import Second from '../../assets/styles/avaimages/2.png';
import Third from '../../assets/styles/avaimages/3.png';
import Fourth from '../../assets/styles/avaimages/4.png';
import Fiveth from '../../assets/styles/avaimages/5.png';
import Sixth from '../../assets/styles/avaimages/6.png';
import Seventh from '../../assets/styles/avaimages/7.png';
import Eigth from '../../assets/styles/avaimages/8.png';



const Ticketlist = () => {
    return (
        <div className="ticket-list">
            <div className="header-tickets">
                <div className="header-left">
                    <h2 className="title">
                        All tickets
                    </h2>
                </div>
                <div className="header-right">
                    <div className="sort">
                        <img src={Sort} alt=""/>
                        <h4 className="sort-title">Sort</h4>
                    </div>

                    <div className="filter">
                        <img src={Filter} alt=""/>
                        <h4 className="filter-title">
                        Filter
                        </h4>
                    </div>

                </div>
            </div>

            <div className="title-block">
                <h2 className="title-block__title">Ticket details</h2>
                <h2 className="title-block__title">Customer name</h2>
                <h2 className="title-block__title">Date</h2>
                <h2 className="title-block__title">Priority</h2>
                <h2 className="title-block__title"></h2>
            </div>
            <GroupList ava={First} name="Tom Cruise" message="Contact Email not Linked" activity="Updated 1 day ago"  time="on 24.05.2019" adate="May 26, 2019" datehour="6:30 PM" priority="high" />
            <GroupList ava={Second} name="Matt Damon" message="Adding Images to Featured" activity="Updated 1 day ago"  time="on 24.05.2019" adate="May 26, 2019" datehour="8:00 PM" priority="LOW" />
            <GroupList ava={Third} name="Matt Damon" message="When will I be charged this?" activity="Updated 1 day ago"  time="on 24.05.2019" adate="May 26, 2019" datehour="7:30 PM" priority="HIGH" />
            <GroupList ava={Fourth} name="Matt Damon" message="Adding Images to Featured" activity="Updated 1 day ago"  time="on 24.05.2019" adate="May 26, 2019" datehour="8:00 PM" priority="LOW" />
            <GroupList ava={Fiveth} name="Matt Damon" message="Adding Images to Featured" activity="Updated 1 day ago"  time="on 24.05.2019" adate="May 26, 2019" datehour="8:00 PM" priority="HIGH" />
            <GroupList ava={Sixth} name="Matt Damon" message="Adding Images to Featured" activity="Updated 1 day ago"  time="on 24.05.2019" adate="May 26, 2019" datehour="8:00 PM" priority="NORMAL" />
            <GroupList ava={Seventh} name="Matt Damon" message="Adding Images to Featured" activity="Updated 1 day ago"  time="on 24.05.2019" adate="May 26, 2019" datehour="8:00 PM" priority="LOW" />
            <GroupList ava={Eigth} name="Matt Damon" message="Adding Images to Featured" activity="Updated 1 day ago"  time="on 24.05.2019" adate="May 26, 2019" datehour="8:00 PM" priority="HIGH" />
      
            <div className="bottom">
                <div className="bottom-left">
                    <h3 className="bottom-title">
                    Rows per page: 8
                    </h3>

                    <img src={Drop} alt=""/>
                </div>
                <div className="bottom-right">
                    <h3 className="bottom-title">
                    1-8 of 1240
                    </h3>

                    <img src={Arrows} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Ticketlist;
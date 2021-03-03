import './group.scss'

import More from '../../assets/styles/icons/more.svg'
// import First from '../../assets/styles/avaimages/1.png';

const GroupList = ({ message, activity,name, time, adate, datehour, priority,ava}) => {
    return(
        <div className="holder">
            
            <div className="first">
                <img src={ava} alt="" className='avatar' />

                <div className="info">
                    <h4 className="info__title">
                        {message}
                    </h4>

                    <p className="info__text">
                        {activity}
                    </p>

                </div>

            </div>

            <div className="second">
                <h4 className="info__title">
                    {name}
                </h4>

                <p className="info__text">
                    {time}
                </p>

            </div>

            <div className="third">

            <h4 className="info__title">
                {adate}
            </h4>

            <p className="info__text">
                {datehour}   
            </p>

            </div>

            <div className="fourth">
                {priority}
            </div>

            <img src={More} alt=""/>

        </div>       
    )
}
export default GroupList;
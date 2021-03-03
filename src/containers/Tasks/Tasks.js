import './tasks.scss'
import Update from '../../components/update/Update'

import Plus from '../../assets/styles/icons/plus.svg'

const Tasks = () => {
    return (
        <div className="tasks">
            <div className="tasks-top">
                <h3 className="tasks-top__title">
                    Tasks
                </h3>
                <h4 className="tasks-top__subtitle">
                    View all
                </h4>
            </div>

            <h4 className="tasks-text">
                Today
            </h4>

            <div className="tasks-bottom">
                <h3 className="tasks-text aaa">
                    Create new task
                </h3>
                <img src={Plus} alt=""/>
            </div>

            <Update/>

        </div>
    )
}

export default Tasks;
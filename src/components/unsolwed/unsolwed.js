import './unsolwed.scss';
import UnsolwedItem from '../unsolwedItem/UnsolwedItem'

const Unsolwed = () => {
    return (
        <div className="unsolwed">
            <div className="unsolwed-top">
                <h3 className="unsolwed-top__title">
                    Unresolved tickets
                </h3>

                <h4 className="unsolwed-top__subtitle">
                    View details
                </h4>
            </div>

            <h4 className="unsolwed-text">
            Group: <span>Support</span>
            </h4>

            <div className="unsolwed-main">
                <UnsolwedItem title="Waiting on Feature Request" number="4238"/>
                <UnsolwedItem title="Awaiting Customer Response" number="1005"/>
                <UnsolwedItem title="Awaiting Developer Fix" number="914"/>
                <UnsolwedItem title="Pending" number="281"/>
            </div>

        </div>
    )
}

export default Unsolwed
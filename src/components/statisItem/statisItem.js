import './statisItem.scss'

const StatisItem = ({title,number}) => {
    return (
        <div className="statis-item-right">
            <h3 className="statis-item-right__title">
                {title}
            </h3>

            <h3 className="statis-item-right__number">
                {number}
            </h3>
        </div>
    )
}

export default StatisItem;
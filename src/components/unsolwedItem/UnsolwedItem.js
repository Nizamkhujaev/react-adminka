import './unsolwedItem.scss'

const UnsolwedItem = ({title, number}) => {
    return (
        <div className="unsolwed-main-content">
                    <h3 className="unsolwed-main-content__title">
                        {title}
                    </h3>
                    <h4 className="unsolwed-main-content__number">
                        {number}
                    </h4>
        </div>
    )
}

export default UnsolwedItem;
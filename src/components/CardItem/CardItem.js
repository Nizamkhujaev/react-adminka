import './carditem.scss';

const CardItem = ({title,number}) => {
    return (
            <div className="a">
                <div className="card">
                <h3 className="card__title">{title}</h3>
                <h3 className="card__number">{number}</h3>
            </div>
            </div>
    )
}

export default CardItem;
import './cards.scss'

import CardItem from '../CardItem/CardItem'

const Card = () => {
    return (
        <div className="card-block">
            <CardItem title="Unresolved" number="60"/>
            <CardItem title="Overdue" number="16"/>
            <CardItem title="Open" number="43"/>
            <CardItem title="On hold" number="64"/>
        </div>
    )
}

export default Card; 
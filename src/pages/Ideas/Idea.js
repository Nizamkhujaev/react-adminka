import { useState } from 'react';

import Header from '../../containers/header/header';

import './idea.scss'

const Idea = () => {

    const [count, changeCount] = useState(0);

    return (
        <div className="idea">
            <div className="idea-left"></div>
            <div className="idea-right">
            {/* <Header title="Idea"/> */}

            <h1>Son: {count}</h1>

            <button className="button" onClick={() => changeCount(count - 1)}>-</button>
            <button onClick={() => changeCount(count + 1)}>+</button>

            </div>
        </div>
    )
}

export default Idea;
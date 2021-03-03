import "./header.scss"

import Lupa from "../../assets/styles/icons/search.svg";
import Bell from "../../assets/styles/icons/bell.svg";
import Ava from "../../assets/styles/ava.png"

const header = ({activePage}) => {
    return(
        <div className="header">
            
            <div className="header-left">
                <h1 className="title">{activePage}</h1>
            </div>

            <div className="header-right">

                <div className="icons">
                    <a href="#"><img src={Lupa} width="20" className="lupa" height="20" alt=""/></a>
                    <a href="#"><img src={Bell} width="20" height="20" alt=""/></a>
                </div>

                <div className="personal">
                    <h3 className="name">Jones Ferdinand</h3>
                    <img src={Ava} alt=""/>
                </div>

            </div>

        </div>
    )
}

export default header;
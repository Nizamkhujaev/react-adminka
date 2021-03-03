import './main.scss'

const SideBarBtn = ({title, icon, active, onClick}) => {
    return (
        <>
            <button className={`sidebar-btn ${active ? 'active' : ''}`} onClick={onClick}>
                <div> {icon} </div>
                <span>{title}</span>
            </button>
        </>
    )
}

export default SideBarBtn;
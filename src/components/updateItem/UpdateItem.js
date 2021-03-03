import './update.scss'

const UpdateItem = ({label, status}) => {
    return (
        <div className="update">
            <div className="form">
                <input type="radio" id="Input"/>
                <label htmlFor="Input">{label}</label>
            </div>
            <h3 className="status">{status}</h3>
        </div>
    )
}

export default UpdateItem;
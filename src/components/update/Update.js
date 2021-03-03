import './Update'

import UpdateItem from '../updateItem/UpdateItem'

const Update = () => {
    return (
        <div className="main-update-content">
            <UpdateItem label="Finish ticket update" status="Urgent"/>
            <UpdateItem label="Create new ticket example" status="New"/>
            <UpdateItem label="Update ticket report" status="Default"/>
        </div>
    )
}

export default Update;
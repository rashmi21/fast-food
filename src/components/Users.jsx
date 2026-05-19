import { useState } from "react";

const Users = (props) => {
    const {name, location} = props;
    return (
        <div className="user-card">
            <h2>User Name: {name} (Functional)</h2>
            <h3>Location: {location}</h3>
        </div>
    )
}

export default Users;
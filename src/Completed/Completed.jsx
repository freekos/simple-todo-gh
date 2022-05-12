import React from "react";

import "./index.scss";

const Completed = ({ name }) => {

    return (
        <div className="completed-item">
            <span className="name">{name}</span>
        </div>
    )
}

export default Completed;
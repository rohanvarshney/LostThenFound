import React, { useState } from "react";

const Popup = (props) => {

    //const [isLost, setLost] = useState("lost")


    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <h1>{props.itemState}</h1>
                <p>hello</p>
            </div>
        </div>
    );
}

export default Popup;
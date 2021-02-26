import React, { useState } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Popup = (props) => {

    //const [isLost, setLost] = useState("lost")


    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <h1>{props.itemState}</h1>
                <div>
                    <InputGroup size="lg">
                        <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
                        <Input />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Time</InputGroupAddon>
                        <Input />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Date</InputGroupAddon>
                        <Input />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">{props.location}</InputGroupAddon>
                        <Input />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Tags</InputGroupAddon>
                        <Input />
                    </InputGroup>

                    <button type="button" id="addPost">Post</button>
                 </div>
            </div>
        </div>
    );
}

export default Popup;
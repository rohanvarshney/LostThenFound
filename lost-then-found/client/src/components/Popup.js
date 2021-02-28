import React, { useState } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Popup = (props) => {


    const [title, setTitle] = useState('');
    const [dateLost, setDateLost] = useState('0000-01-01');
    const [locationLost, setLocationLost] = useState('0000-01-01');
    const [imageSrc, setImgSrc] = useState('');
    const [description, setDescription] = useState('');
    const [tagList, setTagList] = useState('');

    //const [isLost, setLost] = useState("lost")
    function handlePostButtonClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        console.log("Title:" + title);
        // Do onChange event for other fields as needed
    }


    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <h1>{props.itemState}</h1>
                <div class="inputHolder">
                    <input onChange={event => setTitle(event.target.value)} type="text" placeholder="Title" className="postInput"></input> <br></br>
                   
                    <span className="postInputWrap">
                        <label for="time" classsName="inputLabel">{props.timeLabel}:</label>
                        <input type="time" id="time" name="time" className="postInput2"></input> 
                    </span><br></br>

                    <label for="itemDate">{props.dateLabel}:</label>
                        <input type="date" id="itemDate" name="itemDate" className="postInput2"></input> <br></br>
                        
                        <label for="loc">{props.locationLabel}:</label>
                            <input list="locations" name="loc" id="loc" className="postInput2" id="locInput"></input>
                            <datalist id="locations">
                                <option value="Clough Undergraduate Learning Commons"></option>
                                <option value="Klaus College of Computing"></option>
                                <option value="Student Center"></option>
                                <option value="Howey Physics Building"></option>
                                <option value="CRC"></option>
                            </datalist> <br></br>

                        <label for="img">Select image:</label>
                            <input type="file" id="img" name="img" accept="image/*" className="postInput2" id="imgInput"></input> <br></br>

                            <input type="text" placeholder="Item Description" className="postInput" id="descriptionInput"></input> <br></br>

                        <input type="text" placeholder="Tags: e.g. blue, waterbottle" className="postInput"></input> <br></br>

                    <button type="button" id="addPost" onClick={handlePostButtonClick}>Post</button>
                 </div>
            </div>
        </div>
    );
}

export default Popup;
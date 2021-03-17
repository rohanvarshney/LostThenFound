import React, { useState } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Popup = (props) => {


    const [title, setTitle] = useState('');
    const [timeLost, setTimeLost] = useState('');
    const [dateLost, setDateLost] = useState('');
    const [locationLost, setLocationLost] = useState('');
    const [imageSrc, setImgSrc] = useState('');
    const [description, setDescription] = useState('');
    const [tagList, setTagList] = useState('');

    //const [isLost, setLost] = useState("lost")
    function handlePostButtonClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        console.log("Title:" + title);
        console.log("Time Lost:" + timeLost);
        console.log("Date Lost:" + dateLost);
        console.log("Location Lost:" + locationLost);
        console.log("Img Src: " + imageSrc);
        console.log("Description: " + description);
        console.log("Tag List:" + tagList);
        // Do onChange event for other fields as needed

        // TODO: add correct post type (lost/found) based on state of dialog?
        const postObject = { 
            post_title: title,
            time_lost: timeLost,
            date_lost: dateLost,
            tags: tagList,
            description: description,
            location_lost: locationLost,
            imgSrc: {
                data: imageSrc,
                contentType: 'image/jpg'
            }
            // imgSrc: imageSrc
        };   

        // create a POST request with postObject as body
        const postRequest = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postObject)
        };

        // performs post request using api route
        fetch("/api/posts", postRequest)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });


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
                        <input onChange={event => setTimeLost(event.target.value)} type="time" id="time" name="time" className="postInput2"></input>
                    </span><br></br>

                    <label for="itemDate">{props.dateLabel}:</label>
                        <input onChange={event => setDateLost(event.target.value)} type="date" id="itemDate" name="itemDate" className="postInput2"></input> <br></br>

                        <label for="loc">{props.locationLabel}:</label>
                            <input onChange={event => setLocationLost(event.target.value)} list="locations" name="loc" id="loc" className="postInput2" id="locInput"></input>
                            <datalist id="locations">
                                <option value="Clough Undergraduate Learning Commons"></option>
                                <option value="Klaus College of Computing"></option>
                                <option value="Student Center"></option>
                                <option value="Howey Physics Building"></option>
                                <option value="CRC"></option>
                            </datalist> <br></br>

                        <label for="img">Select image:</label>
                            <input onChange={event => setImgSrc(event.target.value)} type="file" id="img" name="img" accept="image/*" className="postInput2" id="imgInput"></input> <br></br>

                            <input onChange={event => setDescription(event.target.value)} type="text" placeholder="Item Description" className="postInput" id="descriptionInput"></input> <br></br>

                        <input onChange={event => setTagList(event.target.value)} type="text" placeholder="Tags: e.g. blue, waterbottle" className="postInput"></input> <br></br>

                    <button type="button" id="addPost" onClick={handlePostButtonClick}>Post</button>
                 </div>
            </div>
        </div>
    );
}

export default Popup;

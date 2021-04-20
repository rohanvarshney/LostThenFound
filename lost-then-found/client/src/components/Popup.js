import React, { useState, useEffect, Component } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Popup = (props) => {

    const userId = useSelector(state => state.auth.user.id);
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [imageSrc, setImgSrc] = useState('');
    const [description, setDescription] = useState('');
    const [tagList, setTagList] = useState('');

    //useEffect(() => {
    //    setUserName(props.state.auth.user.name);
    //}, [props.state.auth.user.name])

    function handlePostButtonClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        console.log("Title:" + title);
        console.log("Time Lost:" + time);
        console.log("Date Lost:" + date);
        console.log("Location Lost:" + location);
        console.log("Img Src: " + imageSrc);
        console.log("Description: " + description);
        console.log("Tag List:" + tagList);
        // Do onChange event for other fields as needed

        // Attribute specs:
        // 'date' corresponds to date_lost field or date_found field
        // 'time' corresponds to time_lost field or time_found field
        // 'location' corresponds to location_lost field or current_location field, for lost posts and found posts respectively

        const formData = new FormData();
        formData.append('who_created',userId);
        formData.append('found',props.isFound);
        formData.append('post_title',title);
        formData.append('time',time);
        formData.append('date',date);
        formData.append('location',location);
        formData.append('tags',tagList.split(','));
        formData.append('description',description);
        formData.append('imgSrc',imageSrc);

        // create a POST request with formData as body
        const postRequest = {
            method: 'POST',
            body: formData
        };

        // performs post request using api route
        fetch("/api/posts", postRequest)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          props.handleClose();
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
                        <input onChange={event => setTime(event.target.value)} type="time" id="time" name="time" className="postInput2"></input>
                    </span><br></br>

                    <label for="itemDate">{props.dateLabel}:</label>
                        <input onChange={event => setDate(event.target.value)} type="date" id="itemDate" name="itemDate" className="postInput2"></input> <br></br>

                        <label for="loc">{props.locationLabel}:</label>
                            <input onChange={event => setLocation(event.target.value)} list="locations" name="loc" id="loc" className="postInput2" id="locInput"></input>
                            <datalist id="locations">
                                <option value="Clough Undergraduate Learning Commons"></option>
                                <option value="Tech Green"></option>
                                <option value="Klaus College of Computing"></option>
                                <option value="Student Center"></option>
                                <option value="Howey Physics Building"></option>
                                <option value="CRC"></option>
                            </datalist> <br></br>

                        <label for="img">Select image:</label>
                            <input onChange={event => setImgSrc(event.target.files[0])} type="file" id="img" name="img" accept=".png, .jpg, .jpeg" className="postInput2" id="imgInput"></input> <br></br>

                            <input onChange={event => setDescription(event.target.value)} type="text" placeholder="Item Description" className="postInput" id="descriptionInput"></input> <br></br>

                        <input onChange={event => setTagList(event.target.value)} type="text" placeholder="Tags: e.g. blue, waterbottle" className="postInput"></input> <br></br>

                    <button type="button" id="addPost" onClick={handlePostButtonClick}>Post</button>
                 </div>
            </div>
        </div>
    );
}

export default Popup;

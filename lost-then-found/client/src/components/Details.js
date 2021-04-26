import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";

const Details = (props) => {

    console.log(props.itemId + " is the item's ID");

    function handleDeleteButtonClick(e) {
        e.preventDefault();

        const postRequest = {
            method: 'DELETE'
        };

        // perform delete request using api route
        fetch("/api/posts/" + props.itemId, postRequest)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          props.handleClose();
        })
        .catch((error) => {
          console.error('Error:', error);
        });


    };

    const auth = useSelector(state => state.auth);

    const [dropoffLocation, setDropoffLocation] = useState('');

    function nothing() {
        return;
    }

    const [emailSent, setEmailSent] = useState(false);

    function handleEmailButtonClick(e) {
        e.preventDefault();

        var userEmail = "";

            const userRequest = {
                method: 'GET'
            };

            fetch("api/users/email/" + props.who_created, userRequest)
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
              userEmail = data;      

                const formData = new FormData();
                
                formData.append('name', auth.user.name);
                formData.append('description', dropoffLocation);
                formData.append('to', userEmail);
                formData.append('contactus', false);

                console.log("User Feedback Data: ");
                for (var key of formData.entries()) {
                    console.log(key[0] + ', ' + key[1]);
                }

                // create a POST request with formData as body
                const postRequest = {
                    method: 'POST',
                    body: formData
                };

                // post to /api/emails route
                fetch("/api/emails", postRequest)
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

                setEmailSent(true);       
                })
            .catch((error) => {
              console.error('Error:', error);
            });

    };

    if (auth.isAuthenticated && auth.user.id == props.who_created) {
        return (
            <div className="popup-box" id="detailsPopup">
                <div className="box" id="detailsBox">
                    <span className="close-icon" id="detailsClose" onClick={props.handleClose}>x</span>
                    
                    <div id="col1">
                        <div id="detailPostInfo">
                            <h1>{props.title}</h1>
                            <span class="detailItemInfo">
                                <img class="icon" src="images/clock.png" />
                                {props.time}
                            </span>
                            <br></br>
                            <span class="detailItemInfo">
                                <img class="icon" src="images/date.png" />
                                {props.date}
                            </span> 
                            <br></br>
                            <span class="detailItemInfo" id = "detailItemLocation">
                                <img class="icon" src="images/location.png" />
                                {props.location}
                            </span>
                            <br></br>
                            <br></br>
                            <span class="detailItemInfo" id = "detailItemDescription">
                                <p>{props.description}</p>
                            </span>
                        </div>

                        <div id="contactButtons">
                            <button type="button" id="deletePost" color="red" onClick={handleDeleteButtonClick}>Delete</button>
                        </div>
                    </div>
                    <div id="col2">
                        <img class="detailImg" src={props.imgSrc} alt='something'/>
                    </div>

                </div>
            </div>
        );
    } else {
        return (
            <div className="popup-box" id="detailsPopup">
                <div className="box" id="detailsBox">
                    <span className="close-icon" id="detailsClose" onClick={props.handleClose}>x</span>
                    
                    <div id="col1">
                        <div id="detailPostInfo">
                            <h1>{props.title}</h1>
                            <span class="detailItemInfo">
                                <img class="icon" src="images/clock.png" />
                                {props.time}
                            </span>
                            <br></br>
                            <span class="detailItemInfo">
                                <img class="icon" src="images/date.png" />
                                {props.date}
                            </span> 
                            <br></br>
                            <span class="detailItemInfo" id = "detailItemLocation">
                                <img class="icon" src="images/location.png" />
                                {props.location}
                            </span>
                            <br></br>
                            <br></br>
                            <span class="detailItemInfo" id = "detailItemDescription">
                                <p>{props.description}</p>
                            </span>
                        </div>

                        <div id="contactButtons">
                            <input onChange={event => setDropoffLocation(event.target.value)} type="text" id="dropoffLocation" name="dropoffLocation" placeholder="Enter Dropoff Location"></input><br></br>
                            <button type="button" id={emailSent ? "location-sent" : "emailLocation"} onClick={emailSent ? nothing : handleEmailButtonClick}>{emailSent ? "Location sent!" : "Share Dropoff Location"}</button>
                        </div>
                    </div>
                    <div id="col2">
                        <img class="detailImg" src={props.imgSrc} alt='something'/>
                    </div>

                </div>
            </div>
        );
    };
    

}

export default Details;
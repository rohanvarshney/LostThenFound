import React, { useState } from 'react';

const Details = (props) => {

    return (
        <div className="popup-box" id="detailsPopup">
            <div className="box" id="detailsBox">
                <span className="close-icon" id="detailsClose" onClick={props.handleClose}>x</span>
                <img class="detailImg" src={props.imgSrc} alt='something'/>

                <div id="detailInfo">
                    <h1>{props.title}</h1>
                    <span class="petInfo">
                        <img class="icon" src="images/clock.png" />
                        {props.time}
                    </span>
                    <br></br>
                    <span class="petInfo">
                        <img class="icon" src="images/date.png" />
                        {props.date}
                    </span> 
                    <br></br>
                    <span class="petInfo">
                        <img class="icon" src="images/location.png" />
                        {props.location}
                    </span>
                </div>

                <div id="contactButtons">
                    <button type="button" id="dropoffLoc">Share Dropoff Location</button>
                </div>

            </div>
        </div>
    );

}

export default Details;
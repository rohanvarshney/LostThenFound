import React, { useState } from 'react';

const Details = (props) => {

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
                        <button type="button" id="dropoffLoc">Share Dropoff Location</button>
                    </div>
                </div>
                <div id="col2">
                    <img class="detailImg" src={props.imgSrc} alt='something'/>
                </div>

            </div>
        </div>
    );

}

export default Details;
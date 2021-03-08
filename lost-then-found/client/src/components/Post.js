import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Details from "./Details";

const Post = (props) => {

  // state management for New Post popup box
  const [visible, setVisible] = useState(false); // default set to hidden

  // handler for toggling state of new post button
  const togglePopup = (d) => {
    setVisible(!visible);
  };

    return (
        <div class="post" onClick={togglePopup}>
          <img class="postImg"
            src={props.imgSrc} 
            alt='something'
          />
          <div class="postInfo">
            <p class="postTitle"><b>{props.title}</b></p>
            <span class="itemInfo">
              <img class="icon" src="images/clock.png" />
              {props.time}
            </span>
            <br></br>
           <span class="itemInfo">
             <img class="icon" src="images/date.png" />
             {props.date}
          </span> 
          <br></br>
          <span class="itemInfo">
            <img class="icon" src="images/location.png" />
            {props.location}
          </span>
          </div>

          {visible && <Details
            imgSrc={props.imgSrc}
            title={props.title}
            time={props.time}
            date={props.date}
            location={props.location}
            handleClose={togglePopup}
          />}

        </div>
      );
}

export default Post;
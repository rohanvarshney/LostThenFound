import React from "react";
import {Link} from "react-router-dom";

const Post = (props) => {
    return (
        <div class="post">
          <img class="postImg"
            src={props.imgSrc} 
            alt='something'
          />
          <div class="animalInfo">
            <p><b>{props.title}</b></p>
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
        </div>
      );
}

export default Post;
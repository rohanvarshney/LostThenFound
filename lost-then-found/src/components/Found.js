import React, { useState } from 'react';
import Post from "./Post";
import Popup from "./Popup";

const Found = (props) => {
    const posts = props.itemData[1].items.map((item, idx) => (
        <Post
            imgSrc={item.imgSrc}
            title={item.title}
            time={item.time}
            date={item.date}
            location={item.location}
            description={item.description}
        />
    ));

    // state management for New Post popup box
    const [visible, setVisible] = useState(false); // default set to hidden

    // handler for toggling state of new post button
    const togglePopup = (d) => {
      setVisible(!visible);
    };

    
    return (
        <div>
      <div class="container">
        <div class="flex-container">
          <span id="searchPost">
              <input type="text" placeholder="Search by keyword..." class="searchBar"></input>
              <button type="button" id="newPost" onClick={togglePopup}>New Post</button>
          </span>

          {posts}

          {visible && <Popup 
                itemState={'Found'}
                handleClose={togglePopup}
          />}
        </div>
      </div>
    </div>

    );
}

export default Found;
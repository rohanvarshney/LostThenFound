import React, { useState } from 'react';
import Post from "./Post";
import Popup from "./Popup";

const Lost = (props) => {

    const posts = props.itemData[0].items.map((item, idx) => (
        <Post
            imgSrc={item.imgSrc}
            title={item.title}
            date={item.date}
            time={item.time}
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
        <div id="searchPost">
          <input type="text" placeholder="Search by keyword..." class="searchBar"></input>
          <button type="button" id="newPost" onClick={togglePopup}>New Post</button>
          </div>
        <div class="flex-container">

          {posts}

          {visible && <Popup 
            itemState={'New Lost Item'}
            location={'Last Seen'}
            timeLabel={'Approximate time lost'}
            dateLabel={'Date lost'}
            locationLabel={'Location lost'}
            handleClose={togglePopup}
          />}
        </div>
      </div>
    </div>

    );
}

export default Lost;
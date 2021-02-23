import React from 'react';
import Post from "./Post";

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

    
    return (
        <div>
      <div class="container">
        <div class="flex-container">{posts}</div>
      </div>
    </div>

    );
}

export default Lost;
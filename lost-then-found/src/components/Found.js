import React from 'react';
import Post from "./Post";

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

    
    return (
        <div>
      <div class="container">
        <div class="flex-container">{posts}</div>
      </div>
    </div>

    );
}

export default Found;
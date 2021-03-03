import React from 'react';
import Post from "components/Post";

const PostHolder = (props) => {

    function Clicked() {
        consosle.log("CLICKED");
    }

    const posts = props.items.map((item, idx) => (
        <Post 
            imgSrc={item.imgSrc}
            title={item.title}
            time={item.time}
            location={item.location}
            description={item.description}
            clickHandle={Clicked}
        />
    )

);
    return (
        <div>
        <div class="container">
            <h1 class="speciesName">{type}</h1>
            <div class="flex-container">{posts}</div>
        </div>
    </div>
    );
}

export default PostHolder;
import React, { useState, useEffect } from 'react';
import Post from "./Post";
import Popup from "./Popup";
import Filter from "./Filter";

const Matches = (props) => {

  const originalPosts = props.itemData[1];
  console.log(originalPosts);
  const [posts, updatePosts] = useState(props.itemData[1]);

  let fetchItemData = () => {
    return fetch("/api/posts")
      .then(response => {
          if (response.ok) {
              return response.json();
          }
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
    <div class="container">
      <div id="searchPost">
        <input type="text" placeholder="Search by keyword..." class="searchBar"></input>
        {/*<button type="button" id="search" onClick={handleSearchAction}>Search</button>*/}
        <button type="button" id="nothing">Empty Button</button>
        </div>
      <div class="flex-container">


      {posts ? posts.map((item, idx) => (
          <Post
                imgSrc={`/uploads/${item.imgSrc}`}
                title={item.post_title}
                date={item.date}
                time={item.time}
                location={item.location}
                description={item.description}
            />
          )) : <p>loading...</p>}
      </div>
    </div>
  </div>

  );
}

export default Matches;

import React, { useState, useEffect } from 'react';
import Post from "./Post";
import Popup from "./Popup";
import Filter from "./Filter";

const Matches = (props) => {

  const originalLostPosts = props.itemData[0];
  const originalFoundPosts = props.itemData[1];
  console.log(originalLostPosts);
  console.log(originalFoundPosts);

  var posts = originalFoundPosts.concat(originalLostPosts);

  const [lostPosts, updateLostPosts] = useState(props.itemData[0]);
  const [foundPosts, updateFoundPosts] = useState(props.itemData[1]);

  let fetchItemData = () => {
    return fetch("/api/posts")
      .then(response => {
          if (response.ok) {
              return response.json();
          }
      })
      .catch(error => console.error(error));
  }

  function isMatch(myPost, otherPost) {
    // TODO: CHECK FOR NULL VALUE COMPARISONS, EMPTY LISTS, ETC.
    // console.log(myPost);
    // console.log(otherPost);
    /*
    take two posts, determine if match:
      1. search of all things that have any of the tagsList
      2. filter for anything not before the time of the allPosts
      3. search of all things that have any similarity to post_title
      all conjunctions of OR (aka it is in the matches page if it fulfills any of the above conditions)
    */
    // same post isn't match
    if (myPost === otherPost) return false;
    if (!myPost || !otherPost) return false;

    // found item to lost item or vice versa
    if (!myPost.found != otherPost.found) return false;

    // TODO: Verify the above two conditions work.

    // 1
    const otherPostTags = otherPost.tags;
    for (var tag in myPost.tags) {
      if (otherPostTags.includes(tag)) {
        return true;
      }
    }

    //2
    if (otherPost.date_posted > myPost.date_posted) {
      return true;
    }

    //3
    // TODO: Make this better
    var otherWords = otherPost.post_title.split(" ");
    var myWords = myPost.post_title.split(" ");
    for (var word in otherWords) {
      if (myWords.includes(word)) {
        return true;
      }
    }

    return false;
  }
  console.log(posts.length);

  for (let a = 0; a < posts.length - 1; a++) {
    for (let b = a + 1; b < posts.length; b++) {
      var post1 = posts[a];
      var post2 = posts[b];
      const match = isMatch(post1, post2);
      console.log(a + ", " + b + ": " + match);
    }
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

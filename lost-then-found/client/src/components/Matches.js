import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import Post from "./Post";
import Popup from "./Popup";
import Filter from "./Filter";

const Matches = (props) => {

  console.log(props.auth.user);
  const user = props.auth.user;

  const auth = useSelector(state => state.auth);
  const history = useHistory();

  useEffect(() => {
  	if (!auth.isAuthenticated) {
      history.push("/login");
    }
  });

  const originalLostPosts = props.itemData[0];
  const originalFoundPosts = props.itemData[1];
  // console.log(originalLostPosts);
  // console.log(originalFoundPosts);

  var posts = originalFoundPosts.concat(originalLostPosts);
  console.log(posts);

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

  /*
  for (let a = 0; a < posts.length - 1; a++) {
    for (let b = a + 1; b < posts.length; b++) {
      var post1 = posts[a];
      var post2 = posts[b];
      const match = isMatch(post1, post2);
      console.log(a + ", " + b + ": " + match);
    }
  }
  */

  function matchesOfPosts(allPosts) {
    var matchedPosts = [];

    for (let a = 0; a < allPosts.length - 1; a++) {
      for (let b = a + 1; b < allPosts.length; b++) {
        var post1 = allPosts[a];
        //console.log(post1.who_created);
        var post2 = allPosts[b];
        const match = isMatch(post1, post2);
        // console.log(a + ", " + b + ": " + match);
        if (match) {
          console.log(a + ", " + b + ": " + match);
          var postOfUser = null;
          var otherPost = null;
          if (post1.who_created === user.name) {
            postOfUser = post1;
            otherPost = post2;
          }
          if (post2.who_created === user.name) {
            postOfUser = post2;
            otherPost = post1;
          }
          if (postOfUser) {
            console.log("We have an official match!");
            matchedPosts.push(otherPost);
          }

        }
      // End of inner for loop
      }
    // End of outer for loop
    }
    console.log("Final Matches: " + matchedPosts);
    // End of method
    return matchedPosts;
  }

  var matchedPosts = matchesOfPosts(posts);

  // TODO: REMOVE THIS ACCORDINGLY.
  posts = matchedPosts;



  return (
    <div>
      <div class="container">
        <div id="searchMyPosts">
          <label for="myPosts" id="myPostsLabel">Select one of your posts:</label>
          <select name="myPosts" id="myPosts">
            <option value="allPosts" selected>All My Posts</option>
            <option value="blueBottle">Blue Water Bottle</option>
            <option value="airpods">Airpods Pro</option>
            <option value="laText">Linear Algebra Textbook</option>
          </select>
          <input type="submit" value="Search" id="searchButton"/>
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

Matches.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { }
)(Matches);

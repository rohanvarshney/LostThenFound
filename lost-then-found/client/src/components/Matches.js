import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import Post from "./Post";
import Popup from "./Popup";
import Filter from "./Filter";

const Matches = (props) => {

  console.log(props.auth.user);

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

  var originalPosts = originalFoundPosts.concat(originalLostPosts);
  console.log(originalPosts);

  var user_posts = getMyPosts(originalPosts);
  // updatePosts(user_posts);

  const [posts, updatePosts] = useState(user_posts);

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

  console.log("Total Items: " + posts.length);


  function isMatch(myPost, otherPost) {
    // TODO: CHECK FOR NULL VALUE COMPARISONS, EMPTY LISTS, ETC.
    // console.log(myPost);
    // console.log(otherPost);
    /*
    take two posts, determine if match:
      1. search of all things that have any of the tagsList
      2. search of all things that have any similarity to post_title
      all conjunctions of OR (aka it is in the matches page if it fulfills any of the above conditions)
    */

    // same post isn't match
    if (myPost === otherPost) return false;
    // either post is null or empty or undefined
    if (!myPost || !otherPost) return false;

    // found item to lost item or vice versa is needed
    if (myPost.found == otherPost.found) return false;

    // 1
    const otherPostTags = otherPost.tags;
    for (var tag in myPost.tags) {
      if (otherPostTags.includes(tag)) {
        return true;
      }
    }

    //2
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


  function matchesOfSpecifiedPost(post_title) {
    var matchedPosts = [];
    var user = props.auth.user;
    console.log(user);
    var specifiedPost = null;

    for (let a = 0; a < originalPosts.length - 1; a++) {
      var postInQuestion = originalPosts[a];
      if (postInQuestion.post_title === post_title) {
        specifiedPost = postInQuestion;
        break;
      }
    }

    if (specifiedPost == null) {
      return matchedPosts;
    }


    for (let a = 0; a < originalPosts.length - 1; a++) {
      var possibleMatchPost = originalPosts[a];
      var match = isMatch(specifiedPost, possibleMatchPost);
      if (match) {
        matchedPosts.push(possibleMatchPost);
      }

    }





    // End of method
    return matchedPosts;
  }


  function getMyPosts(allPosts) {
    var user = props.auth.user;
    var username = user.name;

    var myPosts = [];
    for (let a = 0; a < allPosts.length; a++) {
      var post = allPosts[a];
      if (post.who_created === username) {
        console.log(post);
        myPosts.push(post);
      }
    }
    return myPosts;
  }


  function handleChange(e) {
    if (e.target.value === "allPosts") {
      var user_posts = getMyPosts(originalPosts);
      updatePosts(user_posts);
      let postSelectList = user_posts.length > 0
          && user_posts.map(
            (item, i) => {
              return (
                <option key={i} value={item.post_title}>{item.post_title}</option>
              )
            }, this
          );
    } else {
      const postItemTitle = e.target.value;
      console.log(postItemTitle);
      var matchedPosts = matchesOfSpecifiedPost(postItemTitle)
      updatePosts(matchedPosts);
      console.log(posts);
    }



  }

  let postSelectList = user_posts.length > 0
      && user_posts.map(
        (item, i) => {
          return (
            <option key={i} value={item.post_title}>{item.post_title}</option>
          )
        }, this
      );



  return (
    <div>
      <div class="container">
        <div id="searchMyPosts">
          <label for="myPosts" id="myPostsLabel">Select one of your posts:</label>
          <select name="myPosts" id="myPosts" onInput={handleChange}>
            <option value="allPosts" selected>All My Posts</option>
            {postSelectList}
          </select>
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

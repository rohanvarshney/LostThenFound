import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import Post from "./Post";
import Popup from "./Popup";
import Filter from "./Filter";

const Lost = (props) => {

    const originalPosts = props.itemData[0];

    const [posts, updatePosts] = useState(props.itemData[0]);

    let fetchItemData = () => {
        return fetch("/api/posts")
          .then(response => {
              if (response.ok) {
                  return response.json();
              }
          })
          .catch(error => console.error(error));
      }

    useEffect(() => {
      fetchItemData()
      .then(allPosts => {
          updatePosts(allPosts[0]);
      })
      .catch((err) => console.log(err))},
      []);

    // state management for New Post popup box
    const [visible, setVisible] = useState(false); // default set to hidden
    const [searchText, setSearchText] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);

    var [filterDate] = useState("");
    var [filterTime] = useState("");
    var [tagsList] = useState([]);
    var [a, b, c] = [false, false, false]

    const setFilterDate = (fd) => {
      filterDate = fd;
      a = true;
      if (a && b && c) {
        handleFilterAction();
        a = b = c = false;
      }
    }
    const setFilterTime = (ft) => {
      filterTime = ft;
      b = true;
      if (a && b && c) {
        handleFilterAction();
        a = b = c = false;
      }
    }

    const setTagsList = (tl) => {
      tagsList = tl;
      c = true;
      if (a && b && c) {
        handleFilterAction();
        a = b = c = false;
      }

    }

    // handler for toggling filter popup
    const toggleFilter = (d) => {
      setFilterOpen(!filterOpen);
    }

    // handler for toggling state of new post button
    const togglePopup = (d) => {
      setVisible(!visible);
    };

    function isSearchedFor(item, searchText) {
      if (item === undefined) {
        return false;
      }
      var searched = false;
      if (item.post_title.toLowerCase().includes(searchText.toLowerCase())) {
        searched = true;
      }

      return searched;
    }

    function isFilteredFor(item, filterDate, filterTime, tagsList) {
      var searched = false;
      if (filterDate === item.date) {
        searched = true;
      }
      return searched;

    }

    function handleFilterAction() {
      console.log('The filter action was called.');
      console.log("Filter Params: " + filterDate + ", " + filterTime + ", " + tagsList);
      const allItems = originalPosts;

      if (!filterDate && !filterTime && (tagsList.length == 0 || tagsList === null)) {
          updatePosts(originalPosts);
      } else {
          var filteredItems = allItems.filter(function (item) {
            var validItem = isFilteredFor(item, filterDate, filterTime, tagsList);
            if (validItem == true) {
              console.log("Match");
              console.log(item);
              return true;
            } else {
              console.log("Not a match");
              return false;
            }

          });

          updatePosts(filteredItems);

      }
    }

    function handleSearchAction(e) {
      // console.log(e);
        e.preventDefault();
        console.log('The search button was clicked.');
        console.log("Search Bar Text:" + e.target.value);

        // Do onChange event for other fields as needed
        const allItems = originalPosts;

        if (e.target.value === "") {
          updatePosts(originalPosts);
        } else {
          var searchedItems = allItems.filter(function (item) {
            var validItem = isSearchedFor(item, e.target.value);
            if (validItem == true) {
              console.log("Match");
              console.log(item.props);
              return true;
            } else {
              console.log("Not a match");
              return false;
            }
          });
          updatePosts(searchedItems);
        }

        setSearchText(e.target.value);
    }

    const auth = useSelector(state => state.auth);

    if (auth.isAuthenticated) {
    return (
        <div>
      <div class="container">
        <div id="searchPost">
          <input onChange={event => handleSearchAction(event)} type="text" placeholder="Search by keyword..." class="searchBar"></input>
          {/*<button type="button" id="search" onClick={handleSearchAction}>Search</button>*/}
          <div className="filter-container">
            <button type="button" id="filter" onClick={toggleFilter}>Filter</button>
            {filterOpen && <Filter passFilterDate={setFilterDate} passFilterTime={setFilterTime} passTagsList={setTagsList} />}
          </div>
          <button type="button" id="newPost" onClick={togglePopup}>New Post</button>
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

          {visible && <Popup
            itemState={'New Lost Item'}
            location={'Last Seen'}
            timeLabel={'Approximate time lost'}
            dateLabel={'Date lost'}
            locationLabel={'Location lost'}
            handleClose={togglePopup}
            isFound={false}
          />}
        </div>
      </div>
    </div>

    );
  } else {
    return (
        <div>
      <div class="container">
        <div id="searchPost">
          <input onChange={event => handleSearchAction(event)} type="text" placeholder="Search by keyword..." class="searchBar"></input>
          {/*<button type="button" id="search" onClick={handleSearchAction}>Search</button>*/}
          <div className="filter-container">
            <button type="button" id="filter" onClick={toggleFilter}>Filter</button>
            {filterOpen && <Filter passFilterDate={setFilterDate} passFilterTime={setFilterTime} passTagsList={setTagsList} />}
          </div>
          
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

          {visible && <Popup
            itemState={'New Lost Item'}
            location={'Last Seen'}
            timeLabel={'Approximate time lost'}
            dateLabel={'Date lost'}
            locationLabel={'Location lost'}
            handleClose={togglePopup}
            isFound={false}
          />}
        </div>
      </div>
    </div>

    );
  }
}

export default Lost;

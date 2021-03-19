import React, { useState, useEffect } from 'react';
import Post from "./Post";
import Popup from "./Popup";
import Filter from "./Filter";

const Found = (props) => {

    const originalPosts = props.itemData[0];
    const [posts, updatePosts] = useState(props.itemData[0]);

    let fetchItemData = () => {
      return fetch("/api/posts")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
              console.log("RESPONSE IS NOT OKAYLOST");
            }
        })
        .catch(error => console.error(error));
    }
    
    // fetch all posts on first page load
    useEffect(() => {
      fetchItemData()
      .then(allPosts => {
          updatePosts(allPosts[1]);
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
      var searched = false;
      if (item.title.toLowerCase().includes(searchText.toLowerCase())) {
        searched = true;
      }

      return searched;
    }

    function convertDateFormat(originalDate) {
      if (!originalDate || originalDate === "") {
        return "";
      }
      console.log("Changing: " + originalDate);
      // from yyyy-mm-dd to mm/dd/yyyy
      var parts = originalDate.split("-");
      var newDate = parts[1] + "/" + parts[2] + "/" + parts[0];
      return newDate;
    }

    function isFilteredFor(item, filterDate, filterTime, tagsList) {
      var searched = false;
      // console.log(convertDateFormat(filterDate));
      // console.log(item.date);
      if (convertDateFormat(filterDate) == item.date) {
        searched = true;
      }
      return searched;

    }

    function handleFilterAction() {
      console.log('The filter action was called.');
      console.log("Filter Params: " + filterDate + ", " + filterTime + ", " + tagsList);
      const allItems = originalPosts;

      if (!filterDate && !filterTime && tagsList.length == 0) {
          updatePosts(originalPosts);
      } else {
          var filteredItems = allItems.filter(function (item) {
            var validItem = isFilteredFor(item.props, filterDate, filterTime, tagsList);
            if (validItem == true) {
              console.log("Match");
              console.log(item.props);
              return true;
            } else {
              console.log("Not a match");
              return false;
            }

          });

          updatePosts(filteredItems);

      }
    }

    function handleSearchButtonClick(e) {
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
            var validItem = isSearchedFor(item.props, e.target.value);
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

    return (
      <div>
      <div class="container">
        <div id="searchPost">
          <input onChange={event => handleSearchButtonClick(event)} type="text" placeholder="Search by keyword..." class="searchBar"></input>
          {/*<button type="button" id="search" onClick={handleSearchButtonClick}>Search</button>*/}
          <div className="filter-container">
            <button type="button" id="filter" onClick={toggleFilter}>Filter</button>
            {filterOpen && <Filter passFilterDate={setFilterDate} passFilterTime={setFilterTime} passTagsList={setTagsList} />}
          </div>
          <button type="button" id="newPost" onClick={togglePopup}>New Post</button>
          </div>
        <div class="flex-container">


        {posts ? posts.map((item, idx) => (
            <Post
                  imgSrc={item.imgSrc}
                  title={item.post_title}
                  date={item.date}
                  time={item.time}
                  location={item.location}
                  description={item.description}
              />
            )) : <p>loading...</p>}

          {visible && <Popup
            itemState={'New Found Item'}
            location={'Location Found'}
            timeLabel={'Approximate time found'}
            dateLabel={'Date found'}
            locationLabel={'Location found'}
            handleClose={togglePopup}
            isFound={true}
          />}
        </div>
      </div>
    </div>

    );
}

export default Found;

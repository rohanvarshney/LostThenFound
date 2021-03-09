import React, { useState } from 'react';
import Post from "./Post";
import Popup from "./Popup";
import Filter from "./Filter";

const Found = (props) => {
  const originalPosts = props.itemData[1].items.map((item, idx) => (
      <Post
          imgSrc={item.imgSrc}
          title={item.title}
          date={item.date}
          time={item.time}
          location={item.location}
          description={item.description}
      />
  ));

  var [posts, updatePosts] = useState(props.itemData[1].items.map((item, idx) => (
    <Post
          imgSrc={item.imgSrc}
          title={item.title}
          date={item.date}
          time={item.time}
          location={item.location}
          description={item.description}
      />
  )));

    // state management for New Post popup box
    const [visible, setVisible] = useState(false); // default set to hidden
    const [searchText, setSearchText] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);

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

    function handleSearchButtonClick(e) {
        e.preventDefault();
        console.log('The search button was clicked.');
        console.log("Search Bar Text:" + searchText);

        // Do onChange event for other fields as needed
        const allItems = originalPosts;

        if (searchText === "") {
          updatePosts(originalPosts);
        } else {
          var searchedItems = allItems.filter(function (item) {
            var validItem = isSearchedFor(item.props, searchText);
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
    }

    return (
      <div>
      <div class="container">
        <div id="searchPost">
          <input onChange={event => setSearchText(event.target.value)} type="text" placeholder="Search by keyword..." class="searchBar"></input>
          <button type="button" id="search" onClick={handleSearchButtonClick}>Search</button>
          <div className="filter-container">
            <button type="button" id="filter" onClick={toggleFilter}>Filter</button>
            {filterOpen && <Filter></Filter>}
          </div>
          <button type="button" id="newPost" onClick={togglePopup}>New Post</button>
          </div>
        <div class="flex-container">


          {posts}

          {visible && <Popup
            itemState={'New Found Item'}
            location={'Location Found'}
            timeLabel={'Approximate time found'}
            dateLabel={'Date found'}
            locationLabel={'Location found'}
            handleClose={togglePopup}
          />}
        </div>
      </div>
    </div>

    );
}

export default Found;

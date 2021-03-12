import React, { useState, useEffect } from 'react';
import Post from "./Post";
import Popup from "./Popup";
import Filter from "./Filter";

const Lost = (props) => {

  const originalPosts = props.itemData[0].items.map((item, idx) => (
      <Post
          imgSrc={item.imgSrc}
          title={item.title}
          date={item.date}
          time={item.time}
          location={item.location}
          description={item.description}
      />
  ));

  var [posts, updatePosts] = useState(props.itemData[0].items.map((item, idx) => (
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

    const [filterDate, setFilterDate] = useState();
    const [filterTime, setFilterTime] = useState();
    const [tagsList, setTagsList] = useState([]);

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

    function isFilteredFor(item, filterDate, filterTime, tagsList) {
      var searched = false;
      if (filterDate < item.date) {
        searched = true;
      }
      return searched;

    }

    function handleFilterAction(e) {
      console.log('The filter action was called.');
      console.log("Filter Params: " + filterDate + ", " + filterTime + ", " + tagsList);
      const allItems = posts;

      if (filterDate === "" && filterTime === "" && (tagsList == null || tagsList.length == 0)) {
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
        setSearchText(e.target.value);
        e.preventDefault();
        console.log('The search button was clicked.');
        console.log("Search Bar Text:" + searchText);

        // Do onChange event for other fields as needed
        const allItems = originalPosts;

        if (e.target.value === "" | searchText === "") {
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
          <input onChange={event => handleSearchButtonClick(event)} type="text" placeholder="Search by keyword..." class="searchBar"></input>
          {/*<button type="button" id="search" onClick={handleSearchButtonClick}>Search</button>*/}
          <div className="filter-container">
            <button type="button" id="filter" onClick={toggleFilter}>Filter</button>
            {filterOpen && <Filter passFilterDate={setFilterDate} passFilterTime={setFilterTime} passTagsList={setTagsList} />}
          </div>
          <button type="button" id="newPost" onClick={togglePopup}>New Post</button>
          </div>
        <div class="flex-container">

          {posts}

          {visible && <Popup
            itemState={'New Lost Item'}
            location={'Last Seen'}
            timeLabel={'Approximate time lost'}
            dateLabel={'Date lost'}
            locationLabel={'Location lost'}
            handleClose={togglePopup}
          />}
        </div>
      </div>
    </div>

    );
}

export default Lost;

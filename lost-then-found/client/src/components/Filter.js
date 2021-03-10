import React, { useState, useEffect } from "react";
import TagsInput from "./TagsInput";

const Filter = (props) => {

  const [filterDate, setFilterDate] = useState();
  const [filterTime, setFilterTime] = useState();
  const [tagsList, setTagsList] = useState([]);


  function handleFilterButtonClick(e) {
      e.preventDefault();
      console.log('The filter button was clicked.');
      console.log("Filter Values: ");
      console.log(filterDate);
      console.log(filterTime);
      console.log("List:");
      console.log(tagsList);

      props.passFilterDate(filterDate);
      props.passFilterTime(filterTime);
      props.passTagsList(tagsList);

  }

    return (
        <div class="dropdown">
            <h1>Filter By</h1>
            <label for="itemDate">Date: </label>
                <input onChange={event => setFilterDate(event.target.value)} type="date" id="itemDate" name="itemDate" className="postInput2"></input>
                <br></br>
            <label for="time" classsName="inputLabel">Time: </label>
                <input onChange={event => setFilterTime(event.target.value)} type="time" id="time" name="time" className="postInput2"></input>
                <br></br>

            <TagsInput passTagsList={setTagsList} />

            <br></br>

            <button type="button" id="applyFilter" onClick={handleFilterButtonClick}>Apply</button>

        </div>

    );
}

export default Filter;

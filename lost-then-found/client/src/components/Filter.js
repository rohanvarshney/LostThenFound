import React from 'react';
import TagsInput from "./TagsInput";

const Filter = () => {

    return (
        <div class="dropdown">
            <h1>Filter By</h1>
            <label for="itemDate">Date: </label>
                <input type="date" id="itemDate" name="itemDate" className="postInput2"></input> 
                <br></br>
            <label for="time" classsName="inputLabel">Time: </label>
                <input type="time" id="time" name="time" className="postInput2"></input>
                <br></br>

            <TagsInput></TagsInput>
                    
            <br></br>

            <div id="locationList">

            </div>
                
        </div>

    );
}

export default Filter;
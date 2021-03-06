import React from "react";
const TagsInput = (props) => {
    const [tags, setTags] = React.useState([]);

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.passTagsList(tags);
            // TODO: Off by one error, last item in tags not passed to Filter.
            event.target.value = "";
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };


    return (
        <div className="tags-input">

            <label for="loc">Locations:</label>
            <input
                list="locations"
                name="loc"
                id="loc"
                className="postInput2"
                id="locInput"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add tags"
                ></input>
                <datalist id="locations">
                    <option value="Clough Undergraduate Learning Commons"></option>
                    <option value="Klaus College of Computing"></option>
                    <option value="Student Center"></option>
                    <option value="Howey Physics Building"></option>
                    <option value="CRC"></option>
                </datalist> <br></br>

                <ul>
            {tags.map((tag, index) => (
                <li key={index}>
                    <span>{tag}</span>
                <i className="material-icons" onClick={() => removeTags(index)}>close</i>
                </li>
                ))}
            </ul>
        </div>
    );

};
export default TagsInput;

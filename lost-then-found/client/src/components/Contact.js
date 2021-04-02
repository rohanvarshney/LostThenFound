import React from 'react';

const Contact = () => {
    return (
        <div class="basePage">
            <h1>Contact Us</h1>
            <div class="contactInfo">
                <input type="text" id="name" name="name" placeholder="Name"></input><br></br>
                <input type="email" id="userEmail" name="userEmail" placeholder="Email" ></input><br></br>
                <textarea rows = "5" cols = "60" name = "description" placeholder="Message to the Dev Team">
                </textarea><br></br>
                <button type="button" id="submit">Submit</button>
            </div>
        </div>
    );
}

export default Contact;
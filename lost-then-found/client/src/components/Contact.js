import React from 'react';

const Contact = () => {
    return (
        <div class="basePage">
            <h1>Contact Us</h1>
            <div id="contactInfo">
                <div id="nameInput">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name"></input>
                </div>
                <br></br>
                <label for="userEmail">Email</label>
                <input type="email" id="userEmail" name="userEmail"></input><br></br>
                <label for="userMessage">Message</label>
                <input type="text" id="userMessage" name="userMessage"></input><br></br>
                <button type="button" id="submit">Submit</button>
            </div>
        </div>
    );
}

export default Contact;
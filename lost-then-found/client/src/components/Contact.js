import React, {useState} from 'react';

const Contact = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('description', description);
        formData.append('contactus', true);

        console.log("Contact Form Data: ");
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        // create a POST request with formData as body
        const postRequest = {
            method: 'POST',
            body: formData
        };

        // post to /api/emails route
        fetch("/api/emails", postRequest)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    
    return (
        <div class="basePage">
            <h1>Contact Us</h1>
            <div class="contactInfo">
                <input onChange={event => setName(event.target.value)} type="text" id="name" name="name" placeholder="Name"></input><br></br>
                <input onChange={event => setEmail(event.target.value)} type="email" id="userEmail" name="email" placeholder="Email"></input><br></br>
                <textarea rows = "5" cols = "60" name = "description" placeholder="Message to the Dev Team" onChange={event => setDescription(event.target.value)}></textarea><br></br>
                <button type="button" id="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Contact;
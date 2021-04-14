const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const multer = require('multer');
const upload = multer();

router.post('/', upload.fields([]), (req,res) => {

    let messageBody = ``;

    if (req.body.contactus) {
        // request was sent through contactus form
        messageBody = `
        <p>Feedback: </p>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Description: ${req.body.description}</li>
        </ul>`;
    } else {
        // request was intended to be sent to specific user
        messageBody = `
        <p>Someone Messaged You</p>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Description: ${req.body.description}</li>
            </ul>`;
    }

    async function main() {
        const smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
            user: 'lostthenfoundproduct@gmail.com',
            pass: '0317juniordesign'
                 // ^ probably should hide this somewhere else and refer to them as necessary (as variables in keys.js?)
            }
        })
    
        // Message
        let message = {};
        if (req.body.contactus) {
            message = {
                from: req.body.name + '<lostthenfoundproduct@gmail.com>',
                to: "lostthenfoundproduct@gmail.com",             
                subject: "User Feedback",
                html: messageBody
            };
        } else {
            message = {
                from: '"POST_AUTHOR_NAME" <POST_AUTHOR_EMAIL>', // TODO: specify receiver's name & receiver's email here
                to: "POST_AUTHOR_EMAIL",                        // TODO: specify receiver's email here
                subject: "A User on LostThenFound messaged you",
                html: messageBody
            };
        }
    
        // Attempt to send the email
        smtpTrans.sendMail(message, (err, res) => {
            if (err) {
                console.log(err)            // TODO: Redirect to a page indicating failure or show some text
            }
            else {
                console.log("Success", res) // TODO: Redirect to a page indicating success or show some text
            }
        })
    }
  
    main().catch(console.error);

});

module.exports = router;
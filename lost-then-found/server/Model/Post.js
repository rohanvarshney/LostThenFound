const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema for post

/* Post Schema:

_id:602f386eb146ef0a25e66577       # automatically produced by mongodb for every object added to database
who_created: String
post_title: String
description: String
found: boolean 
date_posted: Date                  # ex: 2020-12-12T04:00:00.000+00:00 (Date.now()), use .getMonth()... and construct formatted string
date: String                       # contains datelost or datefound (depending on post type)
tags: Array (strings)
time: String                       # contains time lost or time found (depending on post type)
location: String                   # contains current location or location lost (depending on post type) 
possible_matches: Array
imgSrc: String                     # path of a file in /uploads/
*/


const PostSchema = new Schema({
    who_created: {
        type: String,
        default: "Default Post Author"
    },
    post_title: {
        type: String
    },
    description: {
        type: String
    },
    found: {
        type: Boolean,
        default: false
    },
    date_posted: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: Array
    },
    location: {
        type: String
    },
    possible_matches: {
        type: Array
    },
    imgSrc:
    {
        type: String,
        default: 'default-thumbnail.jpeg'
    },
    time: 
    {
        type: String
    },
    date: 
    {
        type: String
    }
});

/*
The permitted SchemaTypes are:

String
Number  (limited by -2^53, 2^53)
Date
Buffer
Boolean
Mixed
ObjectId
Array
Decimal128
Map
*/

module.exports = Post = mongoose.model('post', PostSchema);

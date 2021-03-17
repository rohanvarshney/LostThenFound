const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema for post

/* Post Schema:

_id:602f386eb146ef0a25e66577       # automatically produced by mongodb for every object added to database
post_id:3384440726311
who_created:"Mary Smith"
post_title:"Linear Algebra Textbook"
description:"I think I might have left my book when I was studying in Crosland.. Ha..."
found:false
date_posted:2020-12-12T04:00:00.000+00:00 (Date.now())
date_lost:String from Rohan's method in convertDateFormat
tags:Array
time_lost:String
location_lost:String (value from dropdown)
date_found:0000-01-01T00:00:00.000+00:00
location_found:""
current_location:"Crosland Tower"
possible_matches:Array
imgSrc:"https://i.pinimg.com/originals/02/1a/08/021a08be4c6cb83ab865beed862afc..."
*/


const PostSchema = new Schema({
    post_id: {
        type: Number
    },
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
        type: Boolean
    },
    date_posted: {
        type: Date,
        default: Date.now
    },
    time_lost: {
        type: String
    },
    date_lost: {
        type: String
    },
    tags: {
        type: Array
    },
    location_lost: {
        type: String
    },
    date_found: {
        type: Date
    },
    location_found: {
        type: String
    },
    current_location: {
        type: String
    },
    possible_matches: {
        type: Array
    },
    imgSrc:
    {
        data: Buffer,
        contentType: String
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

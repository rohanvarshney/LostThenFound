const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema for user

/* User Schema:

_id:602f386eb146ef0a25e66577       # automatically produced by mongodb for every object added to database
user_id:4495551837422
user_type:1
name:"Mary Smith"
email:"MarySmith@email.com"
password:"password"
date_created:2021-10-25T09:00:00.000+00:00
date_lost:2020-12-11T04:00:00.000+00:00
posts_made:Array
possible_matches:Array
*/


const UserSchema = new Schema({
    user_id: {
        type: Number
    },
    user_type: {
        type: Number,
        default: 1
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    posts_made: {
        type: Array
    },
    possible_matches: {
        type: Array
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

module.exports = User = mongoose.model('user', UserSchema);

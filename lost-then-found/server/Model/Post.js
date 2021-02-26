const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
// TODO: fill in other attributes in PostSchema, with proper required fields (example objects in mongodb atlas)
const PostSchema = new Schema({
    post_title: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('post', PostSchema);

const express = require('express');
const router = express.Router();

// Post Model
const Post = require('../../Model/Post');

// @route GET api/posts
// gets posts in descending order (by date)
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts));
});

// @route POST api/posts
// Create a post
// TODO: fill in other attributes in newPost, with proper required fields
router.post('/', (req, res) => {
    const newPost = new Post({
        post_title: req.body.post_title
    });

    newPost.save().then(post => res.json(post));
});

// @route DELETE api/posts/:id
// Delete a post
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}))
});

module.exports = router;

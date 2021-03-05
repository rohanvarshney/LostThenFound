const express = require('express');
const router = express.Router();

// Post Model (brings in post model)
const Post = require('../../Model/Post');

// @route GET request to api/posts
// gets posts in descending order (by date)
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts));
});

// @route POST request to api/posts
// Create a post
router.post('/', (req, res) => {
    const newPost = new Post({
        post_id: req.body.post_id,
        who_created: req.body.who_created,
        post_title: req.body.post_title,
        description: req.body.description,
        found: req.body.found,
        date_posted: req.body.date_posted,
        date_lost: req.body.date_lost,
        tags: req.body.tags,
        date_found: req.body.date_found,
        location_found: req.body.location_found,
        current_location: req.body.current_location,
        possible_matches: req.body.possible_matches,
        imgSrc: req.body.imgSrc
    });

    newPost.save().then(post => res.json(post));
});

// @route DELETE request to api/posts/:id
// Delete a post
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}))
});

module.exports = router;

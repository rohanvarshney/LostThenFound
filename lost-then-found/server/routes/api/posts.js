const express = require('express');
const router = express.Router();

// library for image uploading
const multer = require('multer');

// Post Model (brings in post model)
const Post = require('../../Model/Post');


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './client/public/uploads/')
    }, 
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
});

const upload = multer({storage: storage});

// @route GET request to api/posts
// gets posts in descending order (by date)
router.get('/', (req, res) => {

    // TODO: sort by date_posted
    Promise.all([
        // gets all posts that are labeled LOST (i.e. found: false)
        Post.find({found: false}).sort({date_posted:-1}),
        // gets posts that are labeled FOUND (i.e. found: true)
        Post.find({found: true}).sort({date_posted:-1})
    ])
    .then(allItems => {
        // return allItems in the format [lost_array,found_array]
        res.json(allItems);
    })
    .catch(error => console.error(error));
});

// @route POST request to api/posts
// Create a post
router.post('/', upload.single('imgSrc'), (req, res) => {
    var newPost = new Post({
        who_created: req.body.who_created,
        post_title: req.body.post_title,
        description: req.body.description,
        found: req.body.found,
        date_posted: req.body.date_posted,
        date: req.body.date || 'None',
        tags: req.body.tags,
        time: req.body.time || 'None',
        location: req.body.location || 'None',
        possible_matches: req.body.possible_matches
    });

    // set imgSrc to file name only if file exists. default image in PostSchema used otherwise.
    if (req.file) newPost.imgSrc = req.file.originalname;

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

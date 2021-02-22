const express = require('express');
const mongoose = require('mongoose');

const posts = require('./src/routes/api/posts');

// initialize express
const app = express();

app.use(express.json());

// Database Configuration
const db = require('./keys').mongoURI;

// Connect to mongodb
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb connected...'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

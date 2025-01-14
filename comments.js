// Create web server with Express
const express = require('express');
const app = express();

// Use the body parser middleware
app.use(express.json());

// Create a new comments array
const comments = [
  { id: 1, username: 'alice', comment: 'I love this article' },
  { id: 2, username: 'bob', comment: 'This article is very informative' },
  { id: 3, username: 'charlie', comment: 'Great article' },
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('Comment not found');
  }
  res.json(comment);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    username: req.body.username,
    comment: req.body.comment,
  };
  comments.push(comment);
  res.status(201).json(comment);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('Comment not found');
  }
  comment.username = req.body.username;
  comment.comment = req.body.comment;
  res.json(comment);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('Comment not found');
  }
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.json(comment);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 
 //In the code above, we have created a simple RESTful API using Express. We have created an array named  comments  that contains three comments. 
 //We have created routes for the following CRUD operations: 
 //Get all comments Get a comment by id
// create a web server
// create a route to handle comments
// create a route to handle comments/new
// create a route to handle comments/:id
// create a route to handle comments/:id/edit
// create a route to handle comments/:id/delete

// 1. create a web server
const express = require('express');
const app = express();

// 2. create a route to handle comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// 3. create a route to handle comments/new
app.get('/comments/new', (req, res) => {
  res.send('This is the new comments page');
});

// 4. create a route to handle comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('This is the comments page for id: ' + req.params.id);
});

// 5. create a route to handle comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
  res.send('This is the edit comments page for id: ' + req.params.id);
});

// 6. create a route to handle comments/:id/delete
app.get('/comments/:id/delete', (req, res) => {
  res.send('This is the delete comments page for id: ' + req.params.id);
});

// 7. listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
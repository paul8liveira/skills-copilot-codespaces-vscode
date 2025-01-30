// create a web server
// create a route for comments
// create a route for comments/new
// create a route for comments/:id
// create a route for comments/:id/edit
// create a route for comments/:id/delete

// create a web server
const express = require('express')
const app = express()

// create a route for comments
app.get('/comments', (req, res) => {
  res.send('comments')
})

// create a route for comments/new
app.get('/comments/new', (req, res) => {
  res.send('new comments')
})

// create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('comments id')
})

// create a route for comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
  res.send('edit comments')
})

// create a route for comments/:id/delete
app.get('/comments/:id/delete', (req, res) => {
  res.send('delete comments')
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
})
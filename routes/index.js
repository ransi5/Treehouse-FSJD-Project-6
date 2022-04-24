//set up dependencies for express and router
const express = require('express');
const router = express.Router();
// set up dependencies for data required
const { data } = require('../data.json');
const { projects } = data;
/*
Set up pathe to handle GET requests and response for the index path
The conditional statement checks if a cookie is set up
if true it sends cookie data along with projects to render the index.pug
else it only sends the project data to render index.pug
*/
router.get('/', (req, res) => {
  if (req.cookies.user) {
    res.render('index', {
      projects,
      username: req.cookies.user
    })
  } else {
    res.render('index', { projects })
  }
})
/*
Set up path to handle `POST` requests and response for the index path
The conditional statement checks if body has atleast username
if true it it checks if the user wants to be remembered
if not it set a 'user' cookie storing the users name and render index.pug with projects and user name data
if user wants to be remembered 3 cookies storing users reponse and expiration date are sent and index.pug
  is rendered with projects and user name data
*/
router.post('/', (req, res) => {
  if (req.body.username) {
    if(!req.body.remember) {
      res.cookie('user', req.body.username);
      res.render('index', {
        projects,
        username: req.body.username
      })
    } else if (req.body.remember) {
      res.cookie('user', req.body.username, { maxAge: 90000000000 })
      res.cookie('employer', req.body.employer, { maxAge: 90000000000 })
      res.cookie('remember', req.body.remember, { maxAge: 90000000000 })
      res.render('index', {
        projects,
        username: req.body.username
      })
    }
  }
})

//router set up to handle request and respone for `/about` data
router.get('/about', (req, res) => {
  res.render('about')
})
//set up module to export router
module.exports = router;

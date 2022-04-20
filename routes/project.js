// set up dependencies for express and router
const express = require('express');
const router = express.Router();
// set up data dependencies for this route
const { data } = require('../data.json');
const { projects } = data;

// set up router path and response
router.get('/:id', (req, res) => {
  res.render('project', { project: projects[req.params.id] })
})
// export the router 
module.exports = router;

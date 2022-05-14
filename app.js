/*
Set up project dependencies and server
*/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// setup req body parser for forms and json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set up cookie parser to read cookies
app.use(cookieParser());

// set up view engine to render pug and listen to 3000 port
app.set('view engine', 'pug')
app.listen(3000)

/*
Set up static folder and routes
*/

app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project')

app.use(mainRoutes);
app.use('/project', projectRoutes)

// middleware for handling errors

app.use((req, res, next) => {
  const err = new Error('Page not found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next)=>{
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
})
=======
/*
Set up project dependencies and server
*/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// setup req body parser for forms and json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set up cookie parser to read cookies
app.use(cookieParser());

// set up view engine to render pug and listen to 3000 port
app.set('view engine', 'pug')
app.listen(3000)

/*
Set up static folder and routes
*/

app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project')

app.use(mainRoutes);
app.use('/project', projectRoutes)

// middleware for handling errors

app.use((req, res, next) => {
  const err = new Error('Page not found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next)=>{
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
})
>>>>>>> 0f9b419ebbba4365c18636c61ce7e5fbfb8174bf

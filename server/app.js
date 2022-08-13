const path = require('path');
const express = require('express');
const app = express();
const { chalk, expressValidator } = require('./exports/library');
var cors = require('cors')

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));



/**
 * ----------------------------------------------------------------
 * To Recevie data from postman via json or urlencoded
 * ----------------------------------------------------------------
 */
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use(cors())


app.use('/', (req, res, next) => {
  req.requestTime = Date.now();
  let fullUrl = req.headers.host + req.originalUrl;
  console.log(chalk.yellow.bold("Request : " + fullUrl));
  // console.log(req.body)
  next();
});


// route imports
/* -- route imports start -- */
app.use('/api/v1', require('./routes/api'));
app.use('/web/v1', require('./routes/web'));
app.use('/admin/v1', require('./routes/admin'));
/* -- route imports end -- */


app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});


module.exports = app;

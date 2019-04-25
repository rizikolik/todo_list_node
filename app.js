var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/TodoApp'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoRoutes'); //importing route
routes(app); //register the route
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(process.env.PORT,process.env.IP,()=>{
  console.log("todo list RESTful API server started...");
});



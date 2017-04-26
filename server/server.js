// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require('axios');
var cheerio = require('cheerio');
// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Database configuration for mongoose
// db: CancerAlliance
mongoose.connect("mongodb://localhost/CancerAlliance");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../app/public/index.html'))
})

require('./server-routes/scrape-routes.js')(app);
require('./server-routes/forumTable-routes.js')(app);


// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
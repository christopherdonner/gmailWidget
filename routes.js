var axios = require("axios");
// var cheerio = require("cheerio");

// var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index");
  });

//other routes go here
app.get("/messages", (req, res) => {

})

}
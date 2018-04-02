var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log ("in the get");
  burger.burger.findAll({}).then(function(results) {
    console.log ("resuts found!");
    console.log (results);
    console.log ("end of results");
    res.render("index", {burger: results});
  });
});

router.post("/api/burgers/", function(req, res) {
  
  console.log(req.body);
  console.log("in the post");
  burger.burger.create(req.body).then(function(results) {
    console.log("completed post");
    // Send back the ID of the new burger
    res.json({ id: results.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  console.log("in put");
  burger.burger.update({
    devoured: true,
    }, 
    {
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
});

// Export routes for server.js to use.
module.exports = router;

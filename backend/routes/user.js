const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get all users
userRoutes.route("/all").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// return single user by id
userRoutes.route("/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});


// create new user 61f9c7b149725719b3395cd7
userRoutes.route("/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let data = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    password:req.body.password,
    is_active: req.body.status,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  };

  console.log(`backend!!!!!!!!`,req.body)
  db_connect.collection("users").insertOne(data, function (err, res) {
    if (err) throw err;
    return response.json(res);
  });

  
});

// update user
userRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  
  let newvalues = {
    $set: {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password:req.body.password,
      is_active: req.body.status,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// delete a record
userRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj)
  });
});

module.exports = userRoutes;
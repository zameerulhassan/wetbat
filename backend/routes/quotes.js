//create model class and export from models to create db tables.

const express = require("express");
const router = express.Router();

const getQuotes = require("../controllers/getQuotes");
const postQuotes = require("../controllers/postQuotes");

const db = require("../util/database");

//@route
//ENDPOINT : '/api/quotes'
//METHOD: GET
router.get("/api/quotes", getQuotes.quotesControllor);

//TO DO....by monday.
//@route
//ENDPOINT : '/api/quotes/:id'
//METHOD: GET
router.get("/api/quote/:id", getQuotes.quoteController);

//@route
//ENDPOINT : '/api/createquote'
//METHOD: POST
//quick and dirty > refactor later.
router.post("/api/createquote", postQuotes.postQuotes);

module.exports = router;

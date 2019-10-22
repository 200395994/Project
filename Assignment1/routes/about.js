'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('about', { title: 'About', comment: 'I am student in georgian college. Currently I am enrolled in computer programmer diploma' });
});

module.exports = router;

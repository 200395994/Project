'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('services', { title: 'Services' , comment: 'Using my skills like HTML5, JavaSript, MySQL, JQuery, PHP.' });
});

module.exports = router;
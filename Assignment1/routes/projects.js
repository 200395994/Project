'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('projects', { title: 'Projects', comment: 'I make website with JavaScript, HTML, CSS'  });
});

module.exports = router;
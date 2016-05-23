// checklistRouter.js

var express = require('express');
var router = express.Router();
var Repo = require('../model/checklistRepository.js');
var repo = new Repo();

/* GET home page. */
router.get('/all', function(req, res) {
	repo.listAll(function(err, rows) {
		if (err) {
			res.status(500).json({message: err});
		} else {
			res.status(200).json(rows);
		}
	});
});

router.get('/at/:index', function(req, res) {
	var index = req.params.index;
	console.log("checklistRouter.at." + index);
	repo.findAtIndex(index, function(err, row) {
		if (err) {
			res.status(500).json({message: err});
		} else {
			if (!row) {
				res.status(404).json({message: "Not found."});
			} else {
				res.status(200).json(row);
			}
		}
	});
});

module.exports = router;

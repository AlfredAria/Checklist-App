// checklistRouter.js

var express = require('express');
var router = express.Router();
var Repo = require('../model/checklistRepository.js');
var repo = new Repo();
var ChecklistItem = require('../model/checklist.js');

router.get('/all', function(req, res) {
	console.log("checklistRouter.all");
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

router.post('/remove/:index', function(req, res) {
	var index = req.params.index;
	console.log("checklistRouter.remove.at." + index);
	repo.removeAtIndex(index, function(err, row) {
		if (err) {
			res.status(500).json({message: err});
		} else {
			res.status(200).json({message: "ok"});
		}
	});
});

router.post('/remove/all', function(req, res) {
	console.log("checklistRouter.remove.all");
	repo.removeAll(function(err, row) {
		if (err) {
			res.status(500).json({message: err});
		} else {
			res.status(200).json({message: "ok"});
		}
	});
});

router.post('/update/:index', function(req, res) {
	var index = req.params.index;
	console.log("checklistRouter.update.index." + index);
	var updatedItem = new ChecklistItem (index, 
		req.body.itemName,
		new Date().toString(), 
		req.body.itemDone);
	repo.updateAtIndex(updatedItem, function(err, row) {
		if (err) {
			res.status(500).json({message: err});
		} else {
			res.status(200).json({message: "ok"});
		}
	});
});

router.post('/add', function(req, res) {
	console.log("checklistRouter.add." + 
		req.body.itemName);
	var newItem = new ChecklistItem (0,
		req.body.itemName,
		new Date().toString(), false);
	repo.add(newItem, function(err, row) {
		if (err) {
			res.status(500).json({message: err});
		} else {
			res.status(200).json({message: "ok"});
		}
	});
});

module.exports = router;

// checklistRouter.js

var express = require('express');
var router = express.Router();
var Repo = require('../model/checklistRepository.js');
var repo = new Repo();
var ChecklistItem = require('../model/checklist.js');

router.get('/', function(req, res) {
	console.log("checklistRouter.query");
	repo.listAll(function(err, rows) {
		if (err) {
			res.status(500).json({message: err});
		} else {
			console.log(rows);
			res.status(200).json(rows);
		}
	});
});

router.get('/:index', function(req, res) {
	var index = req.params.index;
	console.log("checklistRouter.get." + index);
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

router.delete('/:index', function(req, res) {
	var index = req.params.index;
	console.log("checklistRouter.delete." + index);
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

router.put('/', function(req, res) {
	var index = req.body.itemIndex;
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

router.post('/', function(req, res) {
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

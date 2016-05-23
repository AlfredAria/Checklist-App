// checklistRepositoryTest.js

Repo = require('../model/checklistRepository.js');
ChecklistItem = require('../model/checklist.js');
var expect = require('expect.js');

suite ("Checklist Repository Unit Test", function() {

	test ("Can delete all checklist items", function(done) {

		var repo = new Repo();
		repo.removeAll(done);

	});

	test ("Can add one checklist item", function(done) {

		var repo = new Repo();
		var item = new ChecklistItem(1, "Item 1", new Date(), false);
		repo.add(item, done);

	});

	test ("Can list all items", function(done) {

		var repo = new Repo();
		repo.listAll(done);

	});

	// test ("Can get first checklist item", function(done) {

	// 	var repo = new Repo();
	// 	var item = new ChecklistItem(1, "Item 1", new Date(), false);
	// 	repo.add(item, function() {
	// 		repo.findAtIndex(1, done); // Count starts from 1
	// 	});

	// });

	// test ("Can delete one checklist item", function(done) {

	// 	var repo = new Repo();
	// 	var item = new ChecklistItem(1, "Item 1", new Date(), false);
	// 	repo.add(item, function() {
	// 		repo.removeAtIndex(1, done);
	// 	});

	// });
});
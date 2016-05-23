// checklistTest.js
// haoyuanh

var ChecklistItem = require('../model/checklist.js');
var expect = require('expect.js');

suite('Checklist Unit Test', function () {

	test('Create checklist item ok.', function (done) {
		try {
			new ChecklistItem(1, "Item 1", new Date());
			done();
		} catch (e) {
			fail();
		}
	});

	test('Item name can be set', function(done) {
		try {
			c = new ChecklistItem(1, "Item 1", new Date());
			c.setItemName("Item 100");
			expect (c.getItemName()).to.be("Item 100");
			done();
		} catch (e) {
			fail();
		}
	});

});
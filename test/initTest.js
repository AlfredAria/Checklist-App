// initTest.js

var initModel = require("../model/init.js");
var expect = require ("expect.js")

suite ("Database Init Unit Test", function() {

	test ("Database can be initialized.", function(done) {
		console.log("This clears the database checklist.db ...");
		try {
			initModel();
			done();
		} catch (e) {
			fail();
		}
	});
});
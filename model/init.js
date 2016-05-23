// init.js

// Populate the database

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database ('checklist.db');

module.exports = function () {
	db.serialize(function() {
		try {
			console.log("Drop table");
			db.run("drop table if exists CheckList");
			console.log("Create table");
			db.run("create table CheckList (itemIndex integer primary key autoincrement, itemName text, date text, itemDone int)");
		} catch (e) {
			console.log(e);
		}
	});
}
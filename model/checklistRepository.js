// checklistRepository.js
// 

var sqlite3 = require("sqlite3");
var db = new sqlite3.Database('checklist.db');

ChecklistRepository = function() {}

// callback ( err, ChecklistItem[] )
ChecklistRepository.prototype.listAll = function (callback) {
	db.all("select * from CheckList", function (err, rows) {
		if (err) {
			console.log(err);
		}
		console.log("ChecklistRepository FindAll: " + rows);
		callback(err, rows);
	});
}

// callback ( err, ChecklistItem )
ChecklistRepository.prototype.findAtIndex = function (index, callback) {
	db.get("select * from CheckList where itemIndex=?", index, function(err, row) {
		if (err) {
			console.log(err);
			callback(err, undefined);
		} else {
			console.log("ChecklistRepository FindAtIndex: " + row);
			callback(err, row);
		}
	});
}

ChecklistRepository.prototype.removeAtIndex = function (index, callback) {
	db.run("delete from CheckList where itemIndex=?", index, callback);
}

ChecklistRepository.prototype.removeAll = function (callback) {
	db.run("delete from CheckList", callback);
}

ChecklistRepository.prototype.add = function (checklistItem, callback) {
	db.run("insert into CheckList (itemName, date, itemDone) values (?,?,?)",
		checklistItem.getItemName(), 
		checklistItem.getDate(), 
		checklistItem.getDone(),
		callback);
}

ChecklistRepository.prototype.updateAtIndex = function (checklistItem, callback) {
	db.run("update CheckList set itemName=?, date=?, itemDone=? where itemIndex=?",
		checklistItem.getItemName(), 
		checklistItem.getDate(), 
		checklistItem.getDone(),
		checklistItem.getIndex(),
		callback);
}

module.exports = ChecklistRepository;
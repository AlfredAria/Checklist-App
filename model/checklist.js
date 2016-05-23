// index: number, itemName: string, date: Date, done: boolean
ChecklistItem = function (index, itemName, date, done) {
	this.index = index;
	this.itemName = itemName;
	this.date = date;
	this.done = done;
}

ChecklistItem.prototype.setIndex = function (index) {
	this.index = index;
}

ChecklistItem.prototype.getIndex = function () {
	return this.index;
}

ChecklistItem.prototype.setItemName = function(itemName) {
	this.itemName = itemName;
}

ChecklistItem.prototype.getItemName = function () {
	return this.itemName;
}

ChecklistItem.prototype.setDate = function (date) {
	this.date = date;
}

ChecklistItem.prototype.getDate = function () {
	return this.date;
}

ChecklistItem.prototype.setDone = function(done) {
	this.done = done;
}

ChecklistItem.prototype.getDone = function() {
	return this.done;
}

ChecklistItem.prototype.toString = function () {
	return "Index: " + this.index +
		 ", Item Name: " + this.itemName +
		 ", Date: " + this.date + 
		 ", Done: " + this.done +
		 "\n";
}

module.exports = ChecklistItem;
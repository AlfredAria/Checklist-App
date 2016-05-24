// checklistController.js
'use strict';

var checklistApp = angular.module ('checklistApp', [
	'checklistServices']);

checklistApp.controller('checklistController', ['$scope', 'ChecklistItems', 
	function($scope, ChecklistItems) {

		$scope.checklistItems = ChecklistItems.query();
		$scope.add = function() {
			console.log("$scope.add");
			var checklistItem = new ChecklistItems();
			checklistItem.itemName = $scope.newItemName;
			ChecklistItems.save(checklistItem, function(responseJSON, responseHeaderGetter) {
				console.log("Save: ");
				console.log(responseJSON);
				$scope.checklistItems = ChecklistItems.query();
			});
		};

		$scope.checkItem = function(item) {
			console.log("$scope.checkItem " + item.itemIndex);
			var index = item.itemIndex;
			var checklistItem = new ChecklistItems();
			checklistItem.itemIndex = item.itemIndex;
			checklistItem.itemName = item.itemName;
			checklistItem.itemDone = 1;
			ChecklistItems.update(checklistItem, function(responseJSON, responseHeaderGetter) {
				console.log("Update: ");
				console.log(responseJSON);
				$scope.checklistItems = ChecklistItems.query();
			});
		}
}]);
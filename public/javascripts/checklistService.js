'use strict';

var checklistServices = angular.module ('checklistServices', ['ngResource']);

checklistServices.factory('ChecklistItem', ['$resource',
	
	function($resource) {
		return $resource(
			'/checklist/:id', 
			{id: '@_id'},
			{
				method: 'PUT'
			});
	}]

);
'use strict';

var checklistServices = angular.module ('checklistServices', ['ngResource']);

checklistServices.factory('ChecklistItems', ['$resource',
	
	function($resource) {
		return $resource(
			'/checklist/:id', 
			{id: '@_id'},
			{update: 
				{method: 'PUT'}
			});
	}]

);
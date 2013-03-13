angular.module('FreeBaseFilters', []).
  filter('illify', function() {
    return function(input) {
    	return input.replace('Philadelphia','Illadelphia');
    }
  });
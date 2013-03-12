angular.module('FreeBaseFilters', []).
  filter('encodeid', function() {
    return function(input) {
    	return encodeURI(input);
    }
  });
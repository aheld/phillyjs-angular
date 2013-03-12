'use strict';

FreebaseAppApp.factory('freebase', function($http) {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
return {
  someMethod: function() {
    return meaningOfLife;
  },
  searchFreeBase: function(query,$scope){
	
	var url = "https://www.googleapis.com/freebase/v1/search?callback=JSON_CALLBACK&limit=100&query=";

  	var promise = $http({method: 'JSONP', url: url + query}).
          success(function(data, status, headers, config) {
           // $scope.data = data;
        })
     return promise;
  },
  getItem: function(topicid,$scope){
   
  var url = "https://www.googleapis.com/freebase/v1/topic/TOPICID?callback=JSON_CALLBACK"

    var promise = $http({method: 'JSONP', url: url.replace("TOPICID",topicid)}).
          success(function(data, status, headers, config) {
           // $scope.data = data;
        })
     return promise;
  } 
  };
});

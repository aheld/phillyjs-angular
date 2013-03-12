    function mainCtrl($scope, $http){

       $scope.url = "https://www.googleapis.com/freebase/v1/search?query=david+tennant&callback=JSON_CALLBACK"
       $scope.url = "https://www.googleapis.com/freebase/v1/search?query=david+tennant&callback=JSON_CALLBACK"

       $http({method: 'JSONP', url: $scope.url}).
        success(function(data, status, headers, config) {
          $scope.data = data;

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });       
       
    }






function mainCtrl2($scope, $http){

  $scope.search_url = "https://www.googleapis.com/freebase/v1/search?callback=JSON_CALLBACK&query=";

  $scope.$watch("query", function(newValue){
       if (!newValue || newValue.length < 3) return;
       $http({method: 'JSONP', url: $scope.search_url + $scope.query}).
          success(function(data, status, headers, config) {
            $scope.data = data;
        })
  });
}
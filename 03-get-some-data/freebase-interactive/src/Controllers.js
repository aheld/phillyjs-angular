function mainCtrl($scope, $http){

  $scope.search_url = "https://www.googleapis.com/freebase/v1/search?callback=JSON_CALLBACK&limit=100&query=";

  $scope.$watch("query", function(newValue){
       if (!newValue || newValue.length < 3) return;
       $http({method: 'JSONP', url: $scope.search_url + $scope.query}).
          success(function(data, status, headers, config) {
            $scope.data = data;
        });
  });
  $scope.query = "Philadelphia";
}
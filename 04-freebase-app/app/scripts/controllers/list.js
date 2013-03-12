'use strict';

FreebaseAppApp.controller('ListCtrl', function($scope,freebase,$routeParams) {
  $scope.req = freebase.searchFreeBase($routeParams.query);
});


FreebaseAppApp.controller('ItemCtrl', function($scope,freebase,$routeParams) {
  $scope.req = freebase.getItem($routeParams.prefix + '/' + $routeParams.id);
});

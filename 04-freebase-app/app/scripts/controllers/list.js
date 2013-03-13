/* global FreebaseAppApp */

'use strict';

FreebaseAppApp.controller('ListCtrl', function($scope,freebase,$routeParams) {
    $scope.req = freebase.searchFreeBase($routeParams.query);
    $scope.ShowDetails = function(item){
        item.details = freebase.getItem(item.id);
        //item.details = all_details.data.property["/common/topic/description"].values[0].text; 
    };
    $scope.HideDetails = function(item){
        item.details = undefined;
    };
});


FreebaseAppApp.controller('ItemCtrl', function($scope,freebase,$routeParams) {
    $scope.req = freebase.getItem($routeParams.prefix + '/' + $routeParams.id);
});
/* global FreebaseAppApp */

'use strict';

FreebaseAppApp.controller('MainCtrl', function($scope,$location) {
    $scope.searchfb = function(){
            $location.path('/list/' + $scope.query);
            console.log($scope.query);
        };
});


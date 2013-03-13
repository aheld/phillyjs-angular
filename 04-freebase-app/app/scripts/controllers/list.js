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



    //setup leaflet vars
    $scope.showMap = false;
    $scope.message = $routeParams.id;
    $scope.zoom=30;
    $scope.center= { lat: -3.094882122321145, lng: -3.8232421874999996 }
    $scope.marker = $scope.center;

    $scope.$watch('req',function(newValue){
        window.newValue = newValue;
        try {
            var latt = newValue.data.property['/location/location/geolocation'].values[0].property['/location/geocode/latitude'].values[0].value;
            var logi = newValue.data.property['/location/location/geolocation'].values[0].property['/location/geocode/longitude'].values[0].value;
            $scope.center = {lat: latt, lng:logi};
            $scope.marker={lat: latt, lng:logi};
            $scope.showMap = true;
        }
        catch (e){
            console.log("could not load geodata:  " + e);
            //$scope.marker = {};
            $scope.showMap = false;
            }
    });

});
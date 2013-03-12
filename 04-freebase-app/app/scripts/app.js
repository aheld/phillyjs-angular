'use strict';

var FreebaseAppApp = angular.module('FreebaseAppApp', ['FreeBaseFilters'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/list/:query', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/item/:prefix/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  }]);

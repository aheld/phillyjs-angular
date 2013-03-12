describe('controllers', function() {

  describe('mainCtrl', function(){
    var scope, ctrl,httpBackend,controller;

     beforeEach(
        inject(function($rootScope,$controller, $http,$injector) { 
         httpBackend = $injector.get('$httpBackend');
         scope = $rootScope.$new();
         controller = $controller;
//          var ctrl = $controller('mainCtrl', {$scope: scope,$http:$httpBackend})
         //$controller = $controller;
         
        })
      );

    it('should call the right url', function() {
      var url = "https://www.googleapis.com/freebase/v1/search?query=david+tennant&callback=JSON_CALLBACK"
      httpBackend.expect('JSONP',url).respond({"id": "/m/05m7zg"})
      var ctrl = controller('mainCtrl', {$scope: scope})
      httpBackend.flush();
    });
  });
});
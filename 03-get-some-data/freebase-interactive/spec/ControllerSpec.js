describe('controllers', function() {

  describe('mainCtrl', function(){
    var scope, ctrl,httpBackend,controller;

     beforeEach(
        inject(function($rootScope,$controller, $http,$injector) {
         httpBackend = $injector.get('$httpBackend');
         scope = $rootScope.$new();
         controller = $controller;
        })
      );

    it('should call the right url when the query is updated', function() {
      var url = "https://www.googleapis.com/freebase/v1/search?callback=JSON_CALLBACK&limit=100&query=Philadelphia";
      var ctrl = controller('mainCtrl', {$scope: scope});

      scope.query = "Philadelphia";
      httpBackend.expect('JSONP',url).respond({"id": "/m/05m7zg"});
      scope.$digest();
      httpBackend.flush();

      scope.query = "DoesNotMatter";
      url = "https://www.googleapis.com/freebase/v1/search?callback=JSON_CALLBACK&limit=100&query=DoesNotMatter";
      httpBackend.expect('JSONP',url).respond({"id": "/m/05m7zg"});
      scope.$digest();
      httpBackend.flush();

    });
  });
});
describe('Adder controllers', function() {

  describe('addCtrl', function(){
    var scope, ctrl;

     beforeEach(inject(function($rootScope, $controller) { 
      scope = $rootScope.$new();
      ctrl = $controller('addCtrl', {$scope: scope})    }));

    it('should set sum to 4 when number is set to "3,1"', function() {
      expect(scope.sum).toNotEqual(0);
      scope.numbers = "3,1";
      scope.$digest();
      expect(scope.sum).toEqual(4);
    });

    it('should set sum to 10 when number is set to "3,3,4"', function() {
      expect(scope.sum).toNotEqual(0);
      scope.numbers = "3,3,4";
      scope.$digest();
      expect(scope.sum).toEqual(10);
    });

  });
});
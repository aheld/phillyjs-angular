describe('Adder controllers', function() {

  describe('addCtrl', function(){
    var scope, ctrl, $httpBackend;

    it('should automagically update sum', function() {
      scope = $rootScope.$new();
      ctrl = $controller(addCtrl, {$scope: scope})
      expect(scope.sum).toNotEqual(0);
    });


  });
});
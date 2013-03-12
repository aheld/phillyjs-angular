'use strict';
/* jshint undef:false */
describe('Controller: MainCtrl', function() {

  // load the controller's module
    beforeEach(module('FreebaseAppApp'));

    var MainCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller) {
        scope = {};
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a search function to the scope', function() {
        expect(typeof(scope.searchfb)).toBe('function');
    });
});

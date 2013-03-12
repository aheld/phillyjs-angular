'use strict';
/* jshint undef:false */
/* jshint  indent:4 */
describe('Controller: ListCtrl', function() {

    // load the controller's module
    beforeEach(module('FreebaseAppApp'));

    var ListCtrl,
      scope;

  // Initialize the controller and a mock scope
    beforeEach(inject(function($controller) {
        scope = {};
        ListCtrl = $controller('ListCtrl', {
            $scope: scope
        });
    }));

});

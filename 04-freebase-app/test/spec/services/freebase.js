'use strict';
/* jshint undef:false */
/* jshint  indent:4 */
/* jshint camelcase:false */
describe('Service: freebase', function () {

    // load the service's module
    beforeEach(module('FreebaseAppApp'));

    // instantiate service
    var freebase,httpBackend;
    beforeEach(inject(function(_freebase_,$injector) {
        freebase = _freebase_;
        httpBackend = $injector.get('$httpBackend');
    }));

    it('should do something', function () {
        expect(!!freebase).toBe(true);
    });

    it('should find david', function () {
        expect(freebase.someMethod()).toBe(42);
        var $scope = {};
        var url = 'https://www.googleapis.com/freebase/v1/search?callback=JSON_CALLBACK&limit=100&query=Philadelphia';
        httpBackend.expect('JSONP',url).respond({fuzzy: 'bunny'});
        var req = freebase.searchFreeBase('Philadelphia',$scope);
        httpBackend.flush();
        expect(req.data);
    });

});

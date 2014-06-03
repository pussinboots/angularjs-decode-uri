'use strict';

/* jasmine specs for controllers go here */
describe('Controllers tests', function () {

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('demoApp'));

    describe('DecodingCtrl', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(DecodingCtrl, {$scope: scope});
        }));

        it('should', function () {
            $httpBackend.whenGET('/url/partial/url').respond({url:'/url/partial/url'});
    	    $httpBackend.whenGET('/url%2Fpartial%2Furl').respond({url:'/url%2Fpartial%2Furl'});
            rootScope.$digest()
            $httpBackend.flush();
            expect(scope.decodingTrue).toEqualData({url:'/url/partial/url'});
            expect(scope.decodingDefault).toEqualData({url:'/url%2Fpartial%2Furl'});
            expect(scope.decodingFalse).toEqualData({url:'/url%2Fpartial%2Furl'});
        });
    });
});

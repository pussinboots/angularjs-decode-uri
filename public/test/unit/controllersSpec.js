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

    describe('EncodingCtrl', function () {
        var scope, $httpBackend, rootScope;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            $controller(EncodingCtrl, {$scope: scope});
        }));

        it('should', function () {
            $httpBackend.whenGET('/url/partial/url').respond({url:'/url/partial/url'});
    	    $httpBackend.whenGET('/url%2Fpartial%2Furl').respond({url:'/url%2Fpartial%2Furl'});
            rootScope.$digest()
            $httpBackend.flush();
            expect(scope.encodingTrue).toEqualData({url:'/url%2Fpartial%2Furl'});
            expect(scope.encodingDefault).toEqualData({url:'/url%2Fpartial%2Furl'});
            expect(scope.encodingFalse).toEqualData({url:'/url/partial/url'});
        });
    });
});

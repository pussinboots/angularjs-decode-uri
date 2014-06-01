var myAppDev = angular.module('demoApp-Mock', ['demoApp', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    var user = {name: 'Sandra'};
    $httpBackend.whenGET('/url/partial/url').respond({url:'/url/partial/url'});
    $httpBackend.whenGET('/url%2Fpartial%2Furl').respond({url:'/url%2Fpartial%2Furl'});
    $httpBackend.whenGET(/partials\/.*/).passThrough();
}]);

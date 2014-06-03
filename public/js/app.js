'use strict';

/* App Module */
var myModule = angular.module('demoApp', ['Services', 'ngRoute', 'angularjs-decode-uri'])

myModule.config(function ($routeProvider) {
    $routeProvider
        .when('/decoding', { templateUrl: 'partials/decoding.html', controller: DecodingCtrl})
        .otherwise({ redirectTo: '/decoding' });
})

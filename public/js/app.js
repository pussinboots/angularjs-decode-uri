'use strict';

/* App Module */
var myModule = angular.module('demoApp', ['Services', 'ngRoute'])

myModule.config(function ($routeProvider) {
    $routeProvider
        .when('/encoding', { templateUrl: 'partials/encoding.html', controller: EncodingCtrl})
        .otherwise({ redirectTo: '/encoding' });
})

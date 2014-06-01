'use strict';

/* Services */

angular.module('Services', ['ngResource'], function ($provide) {

    $provide.factory('EncodingService', function ($resource, $rootScope) {
        var resource = $resource('/url:uriParts', {}, {
            encodingTrue: {method: 'GET', encoding: true},
            encodingFalse: {method: 'GET', encoding: false},
            encodingDefault: {method: 'GET'}
        });
        return resource;
    });
});

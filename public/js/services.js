'use strict';

/* Services */

angular.module('Services', ['ngResource'], function ($provide) {

    $provide.factory('DecodingService', function ($resource, $rootScope) {
        var resource = $resource('/url:uriParts', {}, {
            decodingTrue: {method: 'GET', decodeuri: true},
            decodingFalse: {method: 'GET', decodeuri: false},
            decodingDefault: {method: 'GET'}
        });
        return resource;
    });
});

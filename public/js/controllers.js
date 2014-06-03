'use strict';

/* Controllers */

function DecodingCtrl($scope, DecodingService) {
        $scope.decodingTrue = DecodingService.decodingTrue({uriParts:"/partial/url"});
        $scope.decodingFalse = DecodingService.decodingFalse({uriParts:"/partial/url"});
        $scope.decodingDefault = DecodingService.decodingDefault({uriParts:"/partial/url"});
}

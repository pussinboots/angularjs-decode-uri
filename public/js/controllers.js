'use strict';

/* Controllers */

function EncodingCtrl($scope, EncodingService) {
        $scope.encodingTrue = EncodingService.encodingTrue({uriParts:"/partial/url"});
        $scope.encodingFalse = EncodingService.encodingFalse({uriParts:"/partial/url"});
        $scope.encodingDefault = EncodingService.encodingDefault({uriParts:"/partial/url"});
}

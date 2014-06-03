var decodeUriModule = angular.module('angularjs-decode-uri', []);
decodeUriModule.config(['$httpProvider', function ($httpProvider) {
     $httpProvider.interceptors.push(function ($q) {
             return {
                 'request': function (config) {
		     if ((config.decodeuri||false)) {
			     config.url = decodeURIComponent(config.url);
		     }
                     return config || $q.when(config);
                 }
             }
         });
}]);

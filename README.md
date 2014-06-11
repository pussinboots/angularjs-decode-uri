##angularjs-decode-uri

[![Build Status](https://travis-ci.org/pussinboots/angularjs-decode-uri.svg?branch=master)](https://travis-ci.org/pussinboots/angularjs-decode-uri)
[![Coverage Status](https://img.shields.io/coveralls/pussinboots/angularjs-decode-uri.svg)](https://coveralls.io/r/pussinboots/angularjs-decode-uri?branch=master)
[![Dependencies](https://david-dm.org/pussinboots/angularjs-decode-uri.png)](https://david-dm.org/pussinboots/angularjs-decode-uri)
[![Heroku](http://heroku-badge.heroku.com/?app=angularjs-decode-uri)](https://angularjs-decode-uri.herokuapp.com)

AngularJS modul to decode uri params in http definitions. Implements the feature of the [Pull Request](https://github.com/angular/angular.js/pull/7652) to angularjs resource modul, as http interceptor.

For the live example click on the heroku badge on the top.

##Install (bower)

* bower install angularjs-decode-uri 
* added javascript file to your app html file manual or
```html
    <script src="(bower_components_folder)/angularjs-decode-uri/public/js/lib/angularjs-decode-uri.js"></script>
```
* with bower replace comment 
```html
<!-- bower:js -->
<!-- endbower -->
```

##Install (manual)

* download [js file](https://github.com/pussinboots/angularjs-decode-uri/blob/master/public/js/lib/angularjs-decode-uri.js)
* added javascript file to your app html file
```html
<script type='text/javascript' src="angularjs-decode-uri.js"></script>
```

##Usage

* add modul dependency ('angularjs-decode-uri') to angular
```js
var demoApp = angular.module('demoApp', ['angularjs-decode-uri']);
```

####Example Service Definition

* configure decoding uri for each rest method default is false
```js
'use strict';

angular.module('services', ['ngResource'], function ($provide) {
   $provide.factory('DecodingService', function ($resource, $rootScope) {
        var resource = $resource('/url:uriParts', {}, {
            decodingTrue: {method: 'GET', decodeuri: true},
            decodingFalse: {method: 'GET', decodeuri: false},
            decodingDefault: {method: 'GET'}
        });
        return resource;
    });
});
```


##Examples

#### Multi ng resource service

```js
'use strict';

angular.module('services', ['ngResource'], function ($provide) {
   $provide.factory('Service', function ($resource, $rootScope) {
        var resource = $resource('/url:uriParts', {}, {
            getProfile: {method: 'GET', params:{uriParts:'/profile/me'}, decodeuri: true},
            getPosts: {method: 'GET', params:{uriParts:'/posts/me'}, decodeuri: true}
        });
        return resource;
    });
});
```
#### proxy service

```js
'use strict';

angular.module('services', ['ngResource'], function ($provide) {
   $provide.factory('Proxy', function ($resource, $rootScope) {
        var resource = $resource('/url:uriParts', {}, {
            getProfile: {method: 'GET', params:{uriParts:'http://www.google.de'}, decodeuri: true},
            getPosts: {method: 'GET', params:{uriParts:'http://www.web.de'}, decodeuri: true}
        });
        return resource;
    });
});
```

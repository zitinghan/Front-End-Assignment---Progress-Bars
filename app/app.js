// config and route
'use strict';

var app = angular.module('app', [
    'ngRoute',
    'app.Main',
])
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/', {
            templateUrl: './app/Main/Main.html',
            controller: 'MainCtrl'
        }).   
        otherwise({
            redirectTo: '/'
        });
}]);


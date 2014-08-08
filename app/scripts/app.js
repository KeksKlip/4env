'use strict';

/**
 * @ngdoc overview
 * @name 4envApp
 * @description
 * # 4envApp
 *
 * Main module of the application.
 */
angular
  .module('4envApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/targets', {
        templateUrl: 'views/targets.html',
        controller: 'TargetsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

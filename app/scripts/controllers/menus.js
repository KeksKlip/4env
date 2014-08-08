'use strict';

/**
 * @ngdoc function
 * @name 4envApp.controller:MenusCtrl
 * @description
 * # MenusCtrl
 * Controller of the 4envApp
 */
angular.module('4envApp')
  .controller('MenusCtrl', function ($scope) {
    $scope.items = [
      'Dashboard',
      'Login',
      'Help'
    ];
  });

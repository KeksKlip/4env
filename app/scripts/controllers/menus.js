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
    var menu = {
      top: [
        {
          name: 'Targets',
          url: '/targets'
        },
        {
          name: 'Login',
          url: '/'
        },
        {
          name: 'Help',
          url: '/'
        }
    ],
      side: [
      'Dashboard',
      'Login',
      'Help'
    ]
    }
    $scope.menu = menu;

  });

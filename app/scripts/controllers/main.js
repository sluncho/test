'use strict';

/**
 * @ngdoc function
 * @name awdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the awdApp
 */
angular.module('awdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name awdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the awdApp
 */
angular.module('awdApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

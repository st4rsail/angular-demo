'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', '$route', function($scope, $route) {
    $scope.data = { message: $route.current.locals.loadData.name };
  }]);

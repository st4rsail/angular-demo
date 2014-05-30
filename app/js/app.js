'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'partials/partial1.html',
      controller: 'MyCtrl1'
    });
    $routeProvider.when('/view2', {
      templateUrl: 'partials/partial2.html',
      controller: 'MyCtrl2',
      resolve: {
        loadData: loadData,
        prepData: prepData
      }
    });
    $routeProvider.otherwise({
      redirectTo: '/view1'
    });
  }
]);

var loadData = function ($q) {
  var defer = $q.defer();
  defer.resolve('hello');
  console.log('1.loadData');
  return defer.promise;
};

var prepData = function ($q) {
  var defer = $q.defer();
  defer.resolve('world');
  console.log(angular.uppercase('Hello'));
  return defer.promise;
};

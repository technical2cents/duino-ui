// Declare app level module which depends on filters, and services
angular.module('duinoflask', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'})
      .when('/pins',{
          templateUrl: 'views/pins/pins.html',
          controller: 'PinsController'
        })

      .otherwise({redirectTo: '/'});
  }]);

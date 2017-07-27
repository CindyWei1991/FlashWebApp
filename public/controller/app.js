var app = angular.module("flashbulb",["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	 .when('/', {
        templateUrl: '../index.html',
        controller: 'flashbulbCtrl',
      })
	 .otherwise({ redirectTo: '/' });
});
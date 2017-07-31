var app = angular.module("flashbulb",["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	 .when('/', {
        templateUrl: '../index.html',
        controller: 'flashbulbCtrl',
      })
	 .otherwise({ redirectTo: '/' });
});

function categoryOrder(item) {
    switch(item) {
      case 'fire':
        return 4;

      case 'blocker':
        return 3;

      case 'goodNews':
        return 2;
      case 'info':
        return 1;
    }  
  }

app.filter('customOrder', function() {
	return function(items, field) {
		items.sort(function(a,b) {
			return (categoryOrder(a['field']) > categoryOrder(a['field']) ? -1:1)
		});

	}
});
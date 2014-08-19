
/*================================================================
=>                  Controller = Home
==================================================================*/
/*global app, navigator*/

app.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

	'use strict';

	$scope.map = {
		lat: 12.9720835,
		lon: 77.59490759999994,
		zoom: 10
	};

	navigator.geolocation.getCurrentPosition(function (location) {
		$scope.map.lat = location.coords.latitude;
		$scope.map.lon = location.coords.longitude;
		$rootScope.$broadcast('mapLocationReceived');
	});

}]);


/*-----  End of Controller = Home  ------*/




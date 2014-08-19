
/*================================================================
=>                  Controller = Home
==================================================================*/
/*global app, navigator*/

app.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

	'use strict';

	$scope.map = {
		lat: 40.52,
		lon: 34.34,
		zoom: 3
	};

	navigator.geolocation.getCurrentPosition(function (location) {
		$scope.map.lat = location.coords.latitude;
		$scope.map.lon = location.coords.longitude;
		$scope.map.zoom = 10;
		$rootScope.$broadcast('mapLocationReceived');
	});

}]);


/*-----  End of Controller = Home  ------*/




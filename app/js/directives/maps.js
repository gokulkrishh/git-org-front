
/*================================================================
=>                  Directive = maps
==================================================================*/
/*global app, google*/

app.directive('maps', ['$rootScope', function ($rootScope) {
   
    'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			function initializeMap() {
				var mapOptions = {
					center: new google.maps.LatLng(scope.map.lat, scope.map.lon),
					zoom: scope.map.zoom
				};
				var map = new google.maps.Map(element[0], mapOptions);
			}

			initializeMap();

			scope.$on('mapLocationReceived', function (newValue, oldValue) {
				initializeMap();
			});
		}
	};
}]);


/*-----  End of Directive = maps  ------*/
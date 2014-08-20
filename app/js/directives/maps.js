
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
                	disableDefaultUI: true,
					center: new google.maps.LatLng(scope.map.lat, scope.map.lon),
					zoom: scope.map.zoom,
					// zoom: 5,
					styles: [
							    {
							        "featureType": "water",
							        "elementType": "geometry",
							        "stylers": [
							            {"color": "#004358"},
							            {"visibility": "on"}
							        ]
							    },
							    {
							        "featureType": "landscape",
							        "elementType": "geometry",
							        "stylers": [
							            {"color": "#1f8a70"}
							        ]
							    },
							    {
							        "featureType": "poi",
							        "elementType": "geometry",
							        "stylers": [
							            {"color": "#1f8a70"},
							            {"visibility": "on"}
							        ]
							    },
							    {
							        "featureType": "road.highway",
							        "elementType": "geometry",
							        "stylers": [
							            {"color": "#fd7400"},
							            {"visibility": "on"}
							        ]
							    },
							    {
							        "featureType": "road.arterial",
							        "elementType": "geometry",
							        "stylers": [
							            {
							                "color": "#1f8a70"
							            },
							            {
							                "lightness": -20
							            },
							            {"visibility": "off"}
							        ]
							    },
							    {
							        "featureType": "road.local",
							        "elementType": "geometry",
							        "stylers": [
							            {
							                "color": "#1f8a70"
							            },
							            {
							                "lightness": -17
							            },
							            {"visibility": "off"}
							        ]
							    },
							    {
							        "elementType": "labels.text.stroke",
							        "stylers": [
							            {
							                "color": "#ffffff"
							            },
							            {
							                "visibility": "off"
							            },
							            {
							                "weight": 0.9
							            },
							            {"visibility": "off"}
							        ]
							    },
							    {
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "visibility": "on"
							            },
							            {
							                "color": "#ffffff"
							            },
							            {"visibility": "on"}
							        ]
							    },
							    {
							        "featureType": "poi",
							        "elementType": "labels",
							        "stylers": [
							            {
							                "visibility": "simplified"
							            }
							        ]
							    },
							    {
							        "elementType": "labels.icon",
							        "stylers": [
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "transit",
							        "elementType": "geometry",
							        "stylers": [
							            {
							                "color": "#1f8a70"
							            },
							            {
							                "lightness": -10
							            }
							        ]
							    },
							    {},
							    {
							        "featureType": "administrative",
							        "elementType": "geometry",
							        "stylers": [
							            {
							                "color": "#1f8a70"
							            },
							            {
							                "weight": 0.7
							            }
							        ]
							    }
							]
				};
				var markerImage = '../../images/map-marker.png';
				var map = new google.maps.Map(element[0], mapOptions);
				var marker = new google.maps.Marker({
				    position: new google.maps.LatLng(scope.map.lat, scope.map.lon),
				    animation: google.maps.Animation.DROP,
				    icon: markerImage
				});
				marker.setMap(map);
			}

			initializeMap();

			scope.$on('mapLocationReceived', function (newValue, oldValue) {
				initializeMap();
			});
		}
	};
}]);


/*-----  End of Directive = maps  ------*/
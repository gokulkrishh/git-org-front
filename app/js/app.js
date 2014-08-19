
/*================================================================
=>                  App = gitOrg
==================================================================*/
/*global angular*/

var app = angular.module('gitOrg', ['ngAnimate', 'ui.router']);


app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function ($httpProvider, $stateProvider, $urlRouterProvider) {
	'use strict';

	$stateProvider
		.state('map', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		});

	$urlRouterProvider.otherwise('/');

	// This is required for Browser Sync to work poperly
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  gitOrg App Run()  
==================================================================*/

app.run(['$rootScope', function ($rootScope) {
	
	'use strict';
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */
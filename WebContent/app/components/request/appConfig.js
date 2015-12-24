// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular
		.module('requestApp')

		// configuring our routes
		// =============================================================================
		.config(
				function($stateProvider, $urlRouterProvider,
						$translateProvider, $httpProvider) {

					// Main
					$stateProvider
							.state(
									'request',
									{
										url : '/request',
										templateUrl : 'app/components/request/views/request.html',
										controller : 'requestController'
									})
							// Recent
							.state(
									'request.recent',
									{
										url : '/recent',
										templateUrl : 'app/components/request/views/recent.html'
									})
							.state(
									'request.recent.search',
									{
										url : '/search',
										templateUrl : 'app/components/request/views/recent-search.html',
										controller : 'searchController'							
									})
							.state(
									'login',
									{
										url : '/login',
										templateUrl : 'app/components/request/views/login.html',
										controller : 'loginController'
									})
							.state(
									'mapa',
									{
										url : '/mapa',
										templateUrl : 'app/components/request/views/mapa.html',
										controller : 'LayerHeatmapCtrl as vm'
										
									})
									;



					// catch all route, send users to the form page
					 $urlRouterProvider.otherwise('/login');



					// Translate options
					$translateProvider
							.translations(
									'en',
									{										
										SEARCH : "Search",
										MINDATE : 'Start date',
										MAXDATE : 'End date',
										LATITUDE : 'Latitude',
										LONGITUDE : 'Longitude',
										CREATED : 'Created at',
										MAP : 'Go to map',
										LOGOUT : 'Logout'
									});

					$translateProvider
							.translations(
									'sp',
									{
										SEARCH : "Buscar",
										MINDATE : 'Fecha inicio',
										MAXDATE : 'Fecha fin',
										LATITUDE : 'Latitud',
										LONGITUDE : 'Longitud',
										CREATED : 'Creado',
										MAP : 'Ir al mapa',
										LOGOUT : 'Salir'
									});
					$translateProvider.preferredLanguage('en');

				});


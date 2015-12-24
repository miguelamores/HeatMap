angular
		.module('requestApp')
		.run(function ($rootScope) {

			  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
			    var requireLogin = toState.data.requireLogin;

			    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
			      event.preventDefault();
			      // get me a login modal!
			    }
			  });

			});
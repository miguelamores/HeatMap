var requestServices = angular.module('securityModule', [ 'ngResource' ]);


requestServices
		.factory(
				'securityFactory','requestFactory'
				[
						'$resource','$requestFactory',
						function($resource) {
							
							$scope.loginFunction = function(){ 
		
								$scope.requestsSearch = requestFactory.login({								
									mail : $scope.mail,
									password : $scope.password
								});		
																												
								$timeout(function(){
									console.log($scope.loginFunction);			
								}, 800);
							}
							
//							return $resource(
//									'http://uioas006t.andespetro.com:7001/identity/restapi/authentication/user')
//									.get();
						} ]);


/*
requestServices.factory('securityFactory', [ '$resource', function($resource) {
	return $resource('http://uioas006t.andespetro.com:7001/identity/restapi/authentication/user', {}, {
		getUser : {
			method : 'GET',
			url : 'http://uioas006t.andespetro.com:7001/identity/restapi/authentication/user'
		}
	});
} ]);
*/
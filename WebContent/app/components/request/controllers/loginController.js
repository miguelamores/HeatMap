angular.module('requestApp')

// our controller for the form
// =============================================================================
.controller(
		'loginController',
		[
				'$scope',
				'$timeout',		
				'$translate',
				'requestFactory',
				'$rootScope',
				'$state',
				function($scope, $timeout, $translate, requestFactory, $rootScope, $state) {		

					$rootScope.user = false;
					console.log($rootScope.user);
					
					
					$(".input" ).focusin(function() {
						  $( this ).find( "span" ).animate({"opacity":"0"}, 200);
						});

						$(".input" ).focusout(function() {
						  $( this ).find( "span" ).animate({"opacity":"1"}, 300);
						});

						$(".login").submit(function(){
						  $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({"color":"#fff"});
						  $(".submit").css({"background":"#2ecc71", "border-color":"#2ecc71"});
						  $(".feedback").show().animate({"opacity":"1", "bottom":"-80px"}, 400);
						  $("input").css({"border-color":"#2ecc71"});
						  return false;
						});
					
						$scope.loginFunction = function(){ 
							//console.log($scope.mail);							
							$scope.requestsSearch = requestFactory.login({
								mail : $scope.mail,
								password : $scope.password
							});	
							
							$timeout(function(){
								if($scope.requestsSearch.name !== undefined){
									$rootScope.user = true;
								}
								//$rootScope.user = $scope.requestsSearch.name;							
								console.log($scope.requestsSearch.name);
								
								
								if($rootScope.user == false){
									console.log("error");
								} else{
									$state.go('request.recent.search');
									
								}
								
								
								
							}, 1500);
							
							
						}
						
						
				}
				

		]);
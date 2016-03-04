// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('requestApp')

// our controller for the form
// =============================================================================
.controller(
		'searchController',
		[
				'$scope',
				'$state',
				'requestFactory',
				'$timeout',
				'$filter',
				'$translate',
				'$http',
				'$rootScope',
				function($scope, $state, requestFactory, $timeout, $filter, $translate, $http, $rootScope) {		

					
					$scope.root = $rootScope.user;
					console.log($rootScope.user);
					//var userVar = $rootScope.user;
					//localStorage.removeItem("user");
					if($scope.root == 1 || $scope.root === undefined){
						localStorage.setItem("user", 1);
						console.log(localStorage.getItem("user"));
						
					} else{
						localStorage.setItem("user", 0);
						console.log(localStorage.getItem("user"));
						
					}
					
					$scope.root = localStorage.getItem("user");
					console.log($scope.root);
					
					$scope.openMin = function($event) {
					    $event.preventDefault();
					    $event.stopPropagation();
					    $scope.openedMin = true;
					};					  

					$scope.dtMin = new Date();
					
					$scope.openMax = function($event) {
					    $event.preventDefault();
					    $event.stopPropagation();
					    $scope.openedMax = true;
					};
					
					$scope.dtMax = new Date();	
				

										
					$scope.getFrom = function(sender){	
						$scope.senderUserName = sender.originalObject.username;
						console.log($scope.senderUserName);
						$scope.senderName = sender.title;						
						//$scope.recipientUserName = $scope.user;
					}
//					$scope.setRecipient = function(){
//						$scope.recipientUserName = $scope.user;
//					}
//					$scope.clearFrom = function(){						
//						$scope.senderUserName = "";						
//						$scope.senderName = "";
//					}
//					
//					

					
					$scope.requestsSearchFunction = function(){ 
						var incMax = new Date($scope.dtMax);
						incMax.setDate($scope.dtMax.getDate() + 1);						
						var incMin = new Date($scope.dtMin);
						incMin.setDate($scope.dtMin.getDate());
						
						$scope.requestsSearch = requestFactory.byAdvancedSearch({
//							senderUsername : $scope.senderUserName, 						
//							recipientDeptCode : $scope.departmentCode,
//							recipientUsername : $scope.recipientUserName,
//							noticeUsername : $scope.notifiedUserName,
//							courierUsername : $scope.courierUserName,	
//							itemType : $scope.itemType,
//							priority : $scope.priority,
//							requestComment : $scope.requestComment,
							startDate : $filter('date')(incMin, 'yyyy/M/d'),//'M/d/yyyy' 
							endDate : $filter('date')(incMax, 'yyyy/M/d'), 
//							page : $scope.page
							});		
																		
						
						$timeout(function(){
							console.log($scope.requestsSearch);			
						}, 800);
					}
					
					$scope.regresar = function(){
						$state.go('login');
					}
					
					
//					$scope.emptyData = function(){
//						$scope.userName = $scope.user;
//						$scope.senderUserName = "";
//						$scope.senderName = "";
//						$scope.departmentCode = "";
//						$scope.recipientUserName = "";
//						$scope.recipientName = "";
//						$scope.notifiedUserName = "";
//						$scope.courierUserName = "";
//						$scope.requestsSearch = "";						
//						$scope.$broadcast('angucomplete-alt:clearInput');						
//					}
					

//					$scope.recallRequest = function(idRequest) {						
//						
//						requestFactory.recall({
//							id : idRequest, auditUsername : $scope.userName});
//						
//						$timeout(function(){
//							$scope.requestsSearchFunction(1);	
//						}, 800);
//						
//
//					}
					
										
//
//					$scope.requestsRecipient = requestFactory
//							.byUsernameRECIPIENT({
//								username : $scope.userName
//							});

				}

		]);

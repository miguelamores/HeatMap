var requestServices = angular.module('requestModule', [ 'ngResource' ]);

requestServices.factory('requestFactory', [ '$resource', function($resource) {
	return $resource('/courier/restapi/requests/:requestId', {}, {
//		byStatusOUTBOX : {
//			method : 'GET',
//			url : '/courier/restapi/requests/bystatus?status=OUTBOX&nocache=' + (new Date()).getTime(),
//			isArray : true
//		},
//		byCourierINTRANSIT : {
//			method : 'GET',			
//			url : '/courier/restapi/requests/bycourier?courierUsername=:username&status=INTRANSIT&deliveryDate=&nocache=' + (new Date()).getTime(),
//			params:{username:'@username'},
//			isArray : true
//		},
//		byRejectOptions : {
//			method : 'GET',			
//			url : '/courier/restapi/rejectoptions'			
//		},
//		byCourierLASTREQUEST : {
//			method : 'GET',			
//			url : '/courier/restapi/requests/bycourierlast?&nocache=' + (new Date()).getTime(),
//			params:{courierUsername:'@courierUsername', status:'@status'},
//			isArray : true
//		},
//		byCourierDELIVERED : {
//			method : 'GET',			
//			url : '/courier/restapi/requests/bycourier?courierUsername=:username&status=DELIVERED&deliveryDate=:deliveryDate&nocache=' + (new Date()).getTime(),
//			params:{username:'@username', deliveryDate:'@deliveryDate'},
//			isArray : true
//		},	
//		byCourierREJECTED : {
//			method : 'GET',			
//			url : '/courier/restapi/requests/bycourier?nocache=' + (new Date()).getTime(),
//			params:{courierUsername:'@courierUsername', status:'@status', deliveryDate:'@deliveryDate'},
//			isArray : true
//		},	
//		byUsernameSENDER : {
//			method : 'GET',
//			url : '/courier/restapi/requests/byusername?username=:username&role=SENDER&limit=10&nocache=' + (new Date()).getTime(),
//			params:{username:'@username'},
//			isArray : true
//		}
//		,
//		byUsernameRECIPIENT : {
//			method : 'GET',
//			url : '/courier/restapi/requests/byusername?username=:username&role=RECIPIENT&limit=10&nocache=' + (new Date()).getTime(),
//			params:{username:'@username'},
//			isArray : true
//		},
//		pickUp : {
//			method : 'PUT',
//			url : '/courier/restapi/requests/:id/pickup',
//			params:{id:'@id'}			
//		},
//		reject : {
//			method : 'PUT',
//			url : '/courier/restapi/requests/:id/reject',
//			params:{id:'@id'}
//		},
//		recall : {
//			method : 'PUT',
//			url : '/courier/restapi/requests/:id/recall',
//			params:{id:'@id', auditUsername:'@auditUsername'}
//		},
		login : {
			method : 'GET',
			url : 'https://polar-fjord-2695.herokuapp.com/user',
			params:{mail:'@mail',password:'password'}
		},
		byAdvancedSearch : {
			method : 'GET',
			url : 'https://polar-fjord-2695.herokuapp.com/measure',
			params:{startDate:'@startDate', endDate:'@endDate'},
			isArray : true,
			withCredentials : true
		}
	});
} ]);

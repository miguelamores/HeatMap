var app = angular.module('requestApp');

app.run(function(amMoment) {
    amMoment.changeLocale('en');
});


app.controller('requestController', [
                                           				'$scope',
                                           				'$http',
                                           				'$translate',
                                        				'$state',
                                        				'$filter',
                                        				'requestFactory',
                                        				'amMoment',
                                        				'paginationConfig',
                                        				'$rootScope',
                                        				function($scope, $http, $translate, $state, $filter, requestFactory, amMoment, paginationConfig, $rootScope) {


	
	

	// route-ui
	$scope.state = $state;
		
    
    // Language
    $scope.languageId = 1033;    
    $scope.reqTypId = 281485929021545;    
    $scope.idioma = "Español";
    $scope.lang = 'en_US';
    
    $scope.setLanguage = function(){    	
    	if($scope.idioma == "Español"){    		
    		$scope.idioma = "English";
    		$scope.languageId = 12298;
    		$scope.codigoIdioma = "sp";
    		
	
    		amMoment.changeLocale('es');
			
    		return $scope.varIdioma = {'languageId':$scope.languageId, 'codigoIdioma':$scope.codigoIdioma};
    		   		
    	}else{    		
    		$scope.idioma = "Español";    		
    		$scope.languageId = 1033;
    		$scope.codigoIdioma = "en";
    		
    		
    		amMoment.changeLocale('en');
    		
    		return $scope.varIdioma = {'languageId':$scope.languageId, 'codigoIdioma':$scope.codigoIdioma};
    	}
    };    
    
    
  //Change the language of the static words
    $scope.changeLanguage = function (key) {
        $translate.use(key);

        
    };    
    
    $scope.logout = function(){
    	$rootScope.user = 0;
    	localStorage.removeItem("user");
    	//location.reload(true);
		$state.go('login');
	}
    
    $scope.goMap = function(){
    	if($rootScope.user == 1){
    		document.location.href = "mapa.html";
    	}
    		
    }
    
    
}
                                           				
]);



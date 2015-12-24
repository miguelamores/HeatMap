app = angular.module("directivesModule", []);

app.directive('requestStatus', function() {
    
    return {
        templateUrl: 'app/shared/views/request-status.html'
    };
});
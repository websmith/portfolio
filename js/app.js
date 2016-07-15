var app = angular.module('ncPortfolio', ['ngRoute', 'portfolioControllers']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).when('/project/:itemId', {
        templateUrl: 'partials/project.html',
        controller: 'ProjectController'
    }).otherwise({
        redirectTo: '/'
    });
}]);

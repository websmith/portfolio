var app = angular.module('ncPortfolio', ['ngRoute', 'portfolioControllers']);
var portfolioControllers = angular.module("portfolioControllers", ['ngAnimate']);

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

portfolioControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('data/portfolio.min.json').success(function(data) {
        $scope.projects = data;
    });
}]);

portfolioControllers.controller('ProjectController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    $http.get('data/portfolio.min.json').success(function(data) {
        $scope.projects = data;
        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.projects.length-1;
        }

        if ($routeParams.itemId < $scope.projects.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }
    });
}]);

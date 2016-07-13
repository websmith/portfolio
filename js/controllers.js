var portfolioControllers = angular.module("portfolioControllers", ['ngAnimate']);

portfolioControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('portfolio.json').success(function(data) {
        $scope.projects = data;
    });
}]);

portfolioControllers.controller('ProjectController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    $http.get('portfolio.json').success(function(data) {
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

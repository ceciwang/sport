window.sport.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/riding', {
            templateUrl: 'templates/riding.html',
            controller: 'ListController',
            label: 'Riding'
        })
        .when('/detail/sample', {
            templateUrl: 'templates/riding.html',
            controller: 'DetailController',
            label: 'Riding/Sample'
        })
        .otherwise({
            templateUrl: 'templates/home.html',
            label: 'Home'
        })
}]);

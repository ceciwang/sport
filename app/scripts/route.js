window.sport.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            label: 'Home'
        })
        .when('/riding', {
            templateUrl: 'templates/riding.html',
            controller: 'ListController',
            label: 'Riding'
        })
        .when('/riding/sample', {
            templateUrl: 'templates/riding.html',
            controller: 'DetailController',
            label: 'Sample'
        })
        .otherwise({
            templateUrl: 'templates/home.html',
            label: 'Home'
        })
}]);

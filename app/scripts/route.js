window.sport.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/riding', {
            templateUrl: 'templates/riding.html',
            label: 'Riding'
        })
        .otherwise({
            templateUrl: 'templates/home.html',
            label: 'Home'
        })
}]);

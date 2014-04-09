window.sport.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            label: 'Home'
        })
        .when('/riding', {
            templateUrl: 'templates/category.html',
            controller: 'ListController',
            label: 'Riding'
        })
        .when('/riding/sample', {
            templateUrl: 'templates/category.html',
            controller: 'DetailController',
            label: 'Sample'
        })
        .otherwise({
            templateUrl: 'templates/home.html',
            label: 'Home'
        })
}]);

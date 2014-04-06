window.sport.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/riding', {
            templateUrl: 'templates/riding.html'
        })
        .otherwise({templateUrl: 'templates/home.html'})
}]);

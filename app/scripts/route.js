window.sport.config(['$routeProvider', function($routeProvider){
    $routeProvider.otherwise({template: 'templates/home.html'})
}]);
window.sport.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            label: 'Home'
        })
        .when('/:category', {
            templateUrl: 'templates/category.html',
            controller: 'CategoryController'
        })
        .when('/:category/:subCategory', {
            templateUrl: 'templates/category.html',
            controller: 'SubCategoryController'
        })
        .when('/:category/:subCategory/:id', {
            templateUrl: 'templates/category.html',
            controller: 'DetailController',
            label: 'Sample'
        })
        .otherwise({
            templateUrl: 'templates/home.html',
            label: 'Home'
        })
}]);

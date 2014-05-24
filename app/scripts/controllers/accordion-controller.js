window.sport.controller('AccordionController', ['$scope', "$routeParams","category", function ($scope, $routeParams, categoryService) {
    $scope.show = function (category) {
        if(!!$routeParams.category){
            return $routeParams.category === category;
        }
        return true;
    };

    $scope.isActiveItem = function (item) {
        if ($routeParams.subCategory === item) {
            return "active";
        }
    };

    $scope.groups = categoryService;

}]);
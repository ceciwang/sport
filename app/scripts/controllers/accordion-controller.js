window.sport.controller('AccordionController', ['$scope', "$routeParams", function ($scope, $routeParams) {
    $scope.show = function (category) {
        return $routeParams.category === category;
    };

    $scope.isActiveItem = function (item) {
        if ($routeParams.subCategory === item) {
            return "active";
        }
    };

    $scope.groups = SPORT.categories;

    $scope.getUrl = function (group, sub) {
        var cate = group.category.join('-');
        var item = sub.join('-');
        return "#/" + cate + "/" + item;
    }
}]);
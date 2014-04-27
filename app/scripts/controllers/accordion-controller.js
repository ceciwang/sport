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

    var getUrl = function (category, sub) {
        var cate = category.replace(' ', '-');
        var item = sub.replace(' ', '-');
        return "#/" + cate + "/" + item;
    };

    _.each($scope.groups, function(group){
        var category = group.category;

        group.subWithLink = [];

        _.each(group.sub, function(item){
            group.subWithLink.push({
                sub: item,
                link: getUrl(category, item)
            });
        })
    });

}]);
window.sport.controller('AccordionController', ['$scope',"$routeParams", function ($scope, $routeParams) {
    $scope.show = function(category){
      return $routeParams.category === category;
    };

    $scope.groups = [{
            category: "riding",
            sub: ["longSleeve", "shortSleeve", "riding1", "riding2"]
        },
        {
            category: "wrestle",
            sub: ["tumbling", "grapple"]
        },
        {
            category: "athletics",
            sub: ["football", "basketball", "badminton", "pingpang"]
        },
        {
            category: "sport",
            sub: ["golf", "subCategory1", "subCategory2", "subCategory3"]
        },
        {
            category: "goods",
            sub: ["protectiveClothing", "accessories", "glove"]
        }
    ]
}]);
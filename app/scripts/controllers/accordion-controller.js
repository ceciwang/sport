window.sport.controller('AccordionController', ['$scope', function ($scope) {
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
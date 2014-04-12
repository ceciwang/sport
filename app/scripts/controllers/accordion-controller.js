window.sport.controller('AccordionController', ['$scope', 'imageRepo', function ($scope, imageRepo) {
    $scope.groups = [
        {
            category: "骑行服",
            sub: ["长袖套装", "短袖套装", "分类一", "分类二"]
        },
        {
            category: "摔跤格斗服",
            sub: ["长袖套装", "短袖套装", "分类一", "分类二"]
        },
        {
            category: "休闲运动服",
            sub: ["长袖套装", "短袖套装", "分类一", "分类二"]
        },
        {
            category: "比赛竞技服",
            sub: ["长袖套装", "短袖套装", "分类一", "分类二"]
        },
        {
            category: "运动用品",
            sub: ["长袖套装", "短袖套装", "分类一", "分类二"]
        }
    ]
}]);
window.sport.controller('CategoryController', ['$scope', 'imageRepo','$routeParams', function ($scope, imageRepo, $routeParams) {
    var category = $routeParams.category;

    imageRepo.fetchProducts(function(data){
        $scope.pics = data[category]["all"];
    });
    $scope.open = function(){};

}]);
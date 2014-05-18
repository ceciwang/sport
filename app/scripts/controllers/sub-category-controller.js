window.sport.controller('SubCategoryController', ['$scope', 'imageRepo','$routeParams', function ($scope, imageRepo, $routeParams) {
    var category = $routeParams.category;
    var subCategory = $routeParams.subCategory;

    imageRepo.fetchProducts(function(data){
        $scope.pics = data[category][subCategory];
    });
    $scope.open = function(){};

}]);
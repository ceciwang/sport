window.sport.controller('SubCategoryController', ['$scope', 'imageRepo','$routeParams', function ($scope, imageRepo, $routeParams) {
    var category = $routeParams.category.replace('-', ' ');
    var subCategory = $routeParams.subCategory.replace('-',' ');

    imageRepo.fetchImages(function(data){
        $scope.pics = data[category][subCategory];
    });
    $scope.open = function(){};

}]);
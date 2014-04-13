window.sport.controller('CategoryController', ['$scope', 'imageRepo','$routeParams', function ($scope, imageRepo, $routeParams) {
    var category = $routeParams.category;

    imageRepo.fetchCategoryImages(function(data){
        $scope.pics = data[category];
    });
    $scope.open = function(){};

}]);
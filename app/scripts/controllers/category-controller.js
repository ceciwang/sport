window.sport.controller('CategoryController', ['$scope', 'imageRepo','$routeParams', function ($scope, imageRepo, $routeParams) {
    var category = $routeParams.category;

    imageRepo.fetchImages.success(function(data){
        $scope.pics = data[category];
    });
    $scope.open = function(){};

}]);
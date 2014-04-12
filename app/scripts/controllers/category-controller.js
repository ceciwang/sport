window.sport.controller('CategoryController', ['$scope', 'imageRepo','$modal', function ($scope, imageRepo, $modal) {
    imageRepo.getRiding(function(data){
        $scope.pics = data.riding;
    });
    $scope.open = function(){};
}]);
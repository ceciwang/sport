window.sport.controller('ListController', ['$scope', 'imageRepo','$modal', function ($scope, imageRepo, $modal) {
    imageRepo.getRiding(function(data){
        $scope.pics = data.riding;
    });
}]);
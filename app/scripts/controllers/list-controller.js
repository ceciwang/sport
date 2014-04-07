window.sport.controller('ListController', ['$scope', 'imageRepo', function ($scope, imageRepo) {
    imageRepo.getRiding(function(data){
        $scope.pics = data.riding;
    })
}]);
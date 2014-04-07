window.sport.controller('ListController', ['$scope', 'imageRepo', function ($scope, imageRepo) {
    $scope.pics = imageRepo.riding;
}]);
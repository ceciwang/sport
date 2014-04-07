window.sport.controller('ListController', ['$scope', 'imageRepo','$modal', function ($scope, imageRepo, $modal) {
    imageRepo.getRiding(function(data){
        $scope.pics = data.riding;
    });
    $scope.open = function (imageUrl) {
        var modalInstance = $modal.open({
            template: '<div><img ng-src="'+imageUrl+'" alt="riding"></div>'
        });
    };
}]);
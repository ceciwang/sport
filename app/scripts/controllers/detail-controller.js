window.sport.controller('DetailController', ['$scope', 'imageRepo','$modal', function ($scope, imageRepo, $modal) {
    imageRepo.getRiding(function(data){
        $scope.pics = data.wrestle;
    });
    $scope.open = function (imageUrl) {
        $modal.open({
            template: '<div><img ng-src="'+imageUrl+'" alt="riding"></div>'
        });
    };
}]);
window.sport.controller('DetailController', ['$scope', 'imageRepo','$modal','$routeParams', function ($scope, imageRepo, $modal, $routeParams) {
    imageRepo.fetchProducts(function(data){
        $scope.pics = data["riding"]["all"];
    });

    $scope.open = function (imageUrl) {
        $modal.open({
            template: '<div><img ng-src="'+imageUrl+'" alt="riding"></div>'
        });
    };
}]);
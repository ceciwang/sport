window.sport.controller('AboutController', ['$rootScope','$scope','imageRepo','category', function($rootScope, $scope, imageRepo, category){
    $scope.myInterval = 5000;

    var slides = $scope.slides = [];

    $scope.categories = category;

    imageRepo.fetchImages().success(function(allImages){
        _.each(allImages.devices, function(image, index){
            slides.push({
                image: image
            });
        });
    });
}]);

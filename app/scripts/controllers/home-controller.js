window.sport.controller('HomeController', ['$scope','imageRepo', function($scope, imageRepo){
    $scope.myInterval = 5000;

    var slides = $scope.slides = [];

    imageRepo.fetchAds().success(function(allImages){
        _.each(allImages.images, function(image){
            slides.push({image: image});
        });
    });

}]);

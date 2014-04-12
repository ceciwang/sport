window.sport.controller('HomeController', ['$scope','imageRepo', function($scope, imageRepo){
    $scope.myInterval = 5000;

    var slides = $scope.slides = [];
    var images = [];

    imageRepo.fetchImages.success(function(allImages){
        images = allImages.home;
        _.each(images, function(image){
            slides.push({image: image});
        });
    });

}]);

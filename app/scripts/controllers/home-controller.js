window.sport.controller('HomeController', ['$scope','imageRepo', function($scope, imageRepo){
    $scope.myInterval = 5000;

    var slides = $scope.slides = [];
    var images = [];

    imageRepo.getRiding(function(data){
        images = data.home;
        _.each(images, function(image){
            slides.push({image: image});
        });
    });


}]);

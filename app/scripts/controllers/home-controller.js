window.sport.controller('HomeController', ['$rootScope','$scope','imageRepo', function($rootScope, $scope, imageRepo){
    $scope.myInterval = 5000;

    var slides = $scope.slides = [];

    var categories = ["riding", "wrestle","athletics", "sport","goods"];

    imageRepo.fetchHeroes().success(function(allImages){
        _.each(allImages.images, function(image, index){
            slides.push({
                image: image,
                uri: categories[index]
            });
        });
    });
}]);

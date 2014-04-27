window.sport.controller('HomeController', ['$rootScope','$scope','imageRepo','category', function($rootScope, $scope, imageRepo, category){
    $scope.myInterval = 5000;

    var slides = $scope.slides = [];

    $scope.categories = category;

    imageRepo.fetchHeroes().success(function(allImages){
        _.each(allImages.images, function(image, index){
            slides.push({
                image: image,
                uri: $scope.categories[index].categoryWithLink.link
            });
        });
    });
}]);

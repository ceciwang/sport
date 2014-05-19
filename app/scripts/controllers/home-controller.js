window.sport.controller('HomeController', ['$rootScope','$scope','imageRepo','category', function($rootScope, $scope, imageRepo, category){
    $scope.myInterval = 3000;

    var slides = $scope.slides = [];

    $scope.categories = category;

    imageRepo.fetchImages().success(function(allImages){
        _.each(allImages.home, function(image, index){
            slides.push({
                image: image,
                uri: $scope.categories[index].categoryWithLink.link
            });
        });

        $scope.getClass = function(index){
            if(slides[index].active){
                return "active";
            }
            return "";
        };
    });
}]);

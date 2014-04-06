window.sport.controller('HomeController', ['$scope', function($scope){
    $scope.myInterval = 5000;

    var slides = $scope.slides = [];

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length;
        slides.push({
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
        slides[i].image = "http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg";
    }
}]);

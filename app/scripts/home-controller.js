angular.module("sport", ['ui.bootstrap']);

function HomeController($scope) {
    $scope.myInterval = 5000;

    var slides = $scope.slides = [];
    var imageUris = _.map(["huawei", "nike", "nike2", "nike3"], function(url){
        return "images/"+url+".jpg";
    });

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length;
        slides.push({
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
        slides[i].image = imageUris[i];
    }
}
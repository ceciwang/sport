window.sport.factory('imageRepo', ['$http', function ($http) {

    var fetchImages = function(){
        return $http.get('data/images.json');
    };
    var fetchAds = function(){
        return $http.get('data/ads.json');
    };
    return {
        fetchAds: fetchAds,
        fetchImages: fetchImages
    }
}]);

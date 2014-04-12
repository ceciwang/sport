window.sport.factory('imageRepo', ['$http', function ($http) {
    return {
        fetchAds: $http.get('data/ads.json'),
        fetchImages: $http.get('data/images.json')
    }
}]);

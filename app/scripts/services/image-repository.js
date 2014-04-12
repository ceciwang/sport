window.sport.factory('imageRepo', ['$http', function ($http) {
    return {
        fetchImages: $http.get('data/images.json')
    }
}]);

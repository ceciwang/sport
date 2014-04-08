window.sport.factory('imageRepo', ['$http', function ($http) {
    var getImages = function (onSuccess) {
        return $http.get('data/images.js').success(onSuccess);
    };

    return {
        home: getImages,
        getRiding: getImages,
        wrestle: [],
        goods: [],
        athletics: [],
        sport: []
    }
}]);

window.sport.factory('imageRepo', ['$http', function ($http) {

    var fetchCategoryImages = function(onSuccess){
        $http.get('data/images.json').success(function(data){
            var result = {};
            _.each(data, function(value, key){
                result[key] = _.chain(value).values().flatten().value();
            });
            onSuccess(result);
        });
    };

    var fetchAds = function(){
        return $http.get('data/ads.json');
    };

    return {
        fetchAds: fetchAds,
        fetchCategoryImages: fetchCategoryImages
    }
}]);

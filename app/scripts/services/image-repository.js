window.sport.factory('imageRepo', ['$http', function ($http) {
    var fetchProducts = function(onSuccess){
        $http.get('data/products.json').success(function(data){
            var result = data;
            _.each(data, function(value, key){
                result[key].all = _.chain(value).values().flatten().value();
            });
            onSuccess(result);
        });
    };

    var fetchImages = function(){
        return $http.get('data/images.json');
    };

    return {
        fetchImages: fetchImages,
        fetchProducts: fetchProducts
    }
}]);

window.sport.factory('imageRepo', ['$http', function ($http) {
    var fetchImages = function(onSuccess){
        $http.get('data/images.json').success(function(data){
            var result = data;
            _.each(data, function(value, key){
                result[key].all = _.chain(value).values().flatten().value();
            });
            onSuccess(result);
        });
    };

    var fetchHeroes = function(){
        return $http.get('data/home.json');
    };

    return {
        fetchHeroes: fetchHeroes,
        fetchImages: fetchImages
    }
}]);

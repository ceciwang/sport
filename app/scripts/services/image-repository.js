window.sport.factory('imageRepo', ['$http', function ($http) {
    var getRiding = function (onSuccess) {
        return $http.get('data/images.json').success(onSuccess);
    };

    return {
        home: ["http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg",
            "http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg",
            "http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg",
            "http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg"],
        getRiding: getRiding,
        wrestle: [],
        goods: [],
        athletics: [],
        sport: []
    }
}]);
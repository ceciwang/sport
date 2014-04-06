window.sport.factory('imageRepo', ['$http', function ($http) {

    var allData = function(){
      $http.get('data/images.json').success(function(data){
          return data.riding;
      })
    };

    return {
        home: ["http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg",
            "http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg",
            "http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg",
            "http://bcs.duapp.com/ccwang/sport%2Fhome%2Fhuawei.jpg"],
        getRiding: allData,
        wrestle: [],
        goods: [],
        athletics: [],
        sport: []
    }
}]);
var loaded = false;
var allPromises;

window.sport.run(['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {
    var i18nPromise = $http.get('data/naming.json');

    $rootScope.lang = "EN";

    allPromises = $q.all([ i18nPromise]);
    allPromises.then(function (respond) {
        $rootScope._ = function(key){
            var translation = respond[0].data[key];
            if(!!translation && $rootScope.lang === "CN"){
                return translation;
            }
            return key;
        };
        loaded = true;
    });

//    $rootScope._ = function (key) {
//        return i18nPromise.then(function (f) {
//            return f(key);
//        });
//    };
}]);

var ctrl = window.sport.controller;
window.sport.controller = function (name, constructor) {
    var fn = constructor[constructor.length - 1];
    constructor[constructor.length - 1] = function () {
        var args = arguments;
        if (!loaded) {
            allPromises.then(function () {
                fn.apply(this, args);
            });
        } else {
            fn.apply(this, args);
        }
    };
    ctrl.apply(this, [name, constructor]);
};
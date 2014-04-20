window.sport.controller('MainController', ['$scope','breadcrumbs','$rootScope', function($scope,breadcrumbs,$rootScope){
    $scope.breadcrumbs = breadcrumbs;
    $scope.i18n = function(language){
        $rootScope.lang = language;
    };
}]);

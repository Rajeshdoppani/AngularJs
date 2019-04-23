app.controller('dataCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('https://api.github.com/users').then(function (resp) {
        console.log(resp);
        $scope.userData = resp.data;
    });
    

}]);
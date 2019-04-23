app.controller('fileCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('products.json').then(function (resp) {
        console.log(resp);
        $scope.products = resp.data;
    });
    $scope.foo = function () {
        $(document).ready(function () {
            $(".panel-body").toggle();
        });
    };
}]); 
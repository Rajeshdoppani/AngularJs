app.controller('pageCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.currentPage = 1;
    $scope.pageSize = 4;
 $http.get('http://onesevenhome.com:8080/shop/categories/Cement?pageNumber=1&pageSize=4').then(function (resp) {
        $scope.products = resp.data.responseData;
        $scope.total = resp.data.paginationData.totalCount;
    });
    $scope.foo = function (page, pageSize) {
        $http.get('http://onesevenhome.com:8080/shop/categories/Cement?pageNumber='+page+'&pageSize='+pageSize).then(function (resp) {
            $scope.products = resp.data.responseData;
            $scope.total = resp.data.paginationData.totalCount;
        });
        
    };
}]);
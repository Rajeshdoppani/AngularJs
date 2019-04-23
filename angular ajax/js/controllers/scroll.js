app.controller('scrollCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://onesevenhome.com:8080/shop//categories/Cement?pageNumber=1&pageSize=15').then(function (resp) {
        console.log(resp);
        $scope.products = resp.data.responseData;
    });
    $('window').scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.goToTop').fadeIn();
        } else {
            $('.goToTop').fadeOut();
        }
    });
    $scope.backToTop = function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    };
}]);
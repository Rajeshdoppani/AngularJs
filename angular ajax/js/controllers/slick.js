app.controller('slickCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {
    $http.get('http://onesevenhome.com:8080/shop//categories/Cement?pageNumber=1&pageSize=15').then(function (resp) {
        $scope.products = resp.data.responseData;
        $scope.slickConfigLoaded = true;
        $scope.update = function () {
            $scope.slickConfigLoaded = false;
            $timeout(function () {
                $scope.slickConfigLoaded = true;
            }, 5);
        };
        $scope.slickCurrentIndex = 0;
        $scope.slickConfig = {
            dots: true,
            autoplay: true,
            initialSlide: 0,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            method: {},
            event: {
                beforeChange: function (event, slick, currentSlide, nextSlide) {
                    console.log('before change');
                },
                afterChange: function (event, slick, currentSlide, nextSlide) {
                    $scope.slickCurrentIndex = currentSlide;
                },
                breakpoint: function (event, slick, breakpoint) {
                    console.log('breakpoint');
                },
                destroy: function (event, slick) {
                    console.log('destroy');
                },
                edge: function (event, slick, direction) {
                    console.log('edge');
                },
                reInit: function (event, slick) {
                    console.log('re-init');
                },
                init: function (event, slick) {
                    console.log('init');
                },
                setPosition: function (evnet, slick) {
                    console.log('setPosition');
                },
                swipe: function (event, slick, direction) {
                    console.log('swipe');
                }
            }
        };
    });

}]);
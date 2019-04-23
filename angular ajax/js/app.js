var app = angular.module('myApp', ['ngRoute', 'ngCookies', 'slickCarousel', 'bw.paging', 'ui.bootstrap']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainCtrl'
    })
    .when('/data', {
      templateUrl: "views/data.html",
      controller: 'dataCtrl'
    })
    .when('/list', {
      templateUrl: 'views/list.html',
      controller: 'listCtrl'
    })
    .when('/cart', {
      templateUrl: 'views/cart.html',
      controller: 'cartCtrl'
    })
    .when('/file', {
      templateUrl: 'views/file.html',
      controller: 'fileCtrl'
    })
    .when('/slick', {
      templateUrl: 'views/slick.html',
      controller: 'slickCtrl'
    })
    .when('/page', {
      templateUrl: 'views/page.html',
      controller: 'pageCtrl'
    })
    .when('/autoComplete', {
      templateUrl: 'views/autoComplete.html',
      controller: 'autoCtrl'
    })
    .when('/scroll', {
      templateUrl: 'views/scroll.html',
      controller: 'scrollCtrl'
    })

    .otherwise({ redirectTo: '/' });

}]);

app.config(['slickCarouselConfig', function (slickCarouselConfig) {
  slickCarouselConfig.dots = true;
  slickCarouselConfig.autoplay = false;
}]);
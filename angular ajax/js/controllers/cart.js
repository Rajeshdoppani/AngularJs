app.controller('cartCtrl', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {
    $http.get('products.json').then(function (resp) {
        console.log(resp);
        $scope.products = resp.data;
        $scope.cart = [];
        $scope.total = 0;
    });

    if (!angular.isUndefined($cookies.get('total'))) {
        $scope.total = parseFloat($cookies.get('total'));
    }

    if (!angular.isUndefined($cookies.get('cart'))) {
        $scope.cart = parseFloat($cookies.get('cart'));
    }

    $scope.addItem = function (product) {
        if ($scope.cart.length === 0) {
            product.count = 1;
            $scope.cart.push(product);
        } else {
            var repeat = false;
            for (i = 0; i < $scope.cart.length; i++) {
                if ($scope.cart[i].id === product.id) {
                    repeat = true;
                    $scope.cart[i].count += 1;
                }
            }
            if (!repeat) {
                product.count = 1;
                $scope.cart.push(product);
            }
        }
        var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 1);

        $cookies.putObject('cart', $scope.cart, { 'expires': expiryDate });
        $scope.cart = $cookies.getObject('cart');

        $scope.total += parseFloat(product.price);
        $cookies.put('total', $scope.total, { 'expires': expiryDate });
    };

    $scope.removeItem = function (product) {
        if (product.count > 1) {
            product.count -= 1;

            expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 1);

            $cookies.putObject('cart', $scope.cart, { 'expires': expiryDate });
            $scope.cart = $cookies.getObject('cart');
        }
        else if (product.count === 1) {
            var x = $scope.cart.indexOf[product];
            $scope.cart.splice(x, 1);

            expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 1);

            $cookies.putObject('cart', $scope.cart, { 'expires': expiryDate });
            $scope.cart = $cookies.getObject('cart');
        }


        $scope.total -= parseFloat(product.price);
        $cookies.put('total', $scope.total, { 'expires': expiryDate });

    };

    $scope.clear = function () {
        $cookies.remove('cart');
        $cookies.remove('total');
    };

    $scope.proceed = function () {
        alert('Success');
    };

}]);
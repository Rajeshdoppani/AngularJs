app.controller('listCtrl', function ($scope, $http) {
    $scope.products = ['Apple', 'Samsung', 'Nokia'];
    $scope.addProduct = function () {
        $scope.errorMsg = "";
        if (!$scope.addMe) {
            return;
        }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        }
        else {
            $scope.errorMsg = "The Product is already in the list";
        }

        $scope.removeProduct = function (x) {
            $scope.errorMsg = "";
            $scope.products.splice(x, 1);
        }
    }
});
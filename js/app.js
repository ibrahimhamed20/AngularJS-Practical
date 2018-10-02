/*global angular*/
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    'use strict';
    $routeProvider
        .when("/", {templateUrl : "pages/main.htm", controller  : "mainCtrl"})
        .when("/users", {templateUrl : "pages/users.htm", controller  : "userCtrl"})
        .when("/orders", {templateUrl : "pages/orders.htm", controller  : "orderCtrl"})
        .when("/products", {templateUrl : "pages/products.htm", controller  : "productCtrl"})
        .otherwise({template : "<h1 class='text-center'>None</h1><p class='text-center'>Nothing has been selected</p>"});
});
// This is Main Controller
app.controller("mainCtrl", function ($scope) {
    'use strict';
    $scope.users = 154;
    $scope.depts = 65;
    $scope.products = 654;
    $scope.orders = 1429;
});

// This is Users Controller
app.controller("userCtrl", function ($scope, $http) {
    'use strict';
    $scope.Title = "Manage Users";
    $scope.Message = "";
    $http.get("data/users.json").then(function (response) {
        $scope.details = response.data.records;
    });
    $scope.addUser = function () {  // add user function 
        $scope.errortext = "";
        if (!$scope.detail) {
            $scope.errortext = "The New User Form is Empty!";
            return;
        }
        if ($scope.details.indexOf($scope.detail) === -1) {
            $scope.details.push($scope.detail);
            $http.post('data/users.json', $scope.details);
            $scope.detail = {};
            $scope.Message = "New User Added Successfully!";
        } else {
            $scope.errortext = "The User is already in your list.";
        }
    };
    
    /*$scope.addUser = function () {
        $scope.details.push($scope.detail);
        $http.post('users.json', $scope.details);
        $scope.detail = {};
        $scope.Message = "New User Added Successfully!";
    };*/
    
    $scope.removeUser = function (x) {  // delete user function
        $scope.errortext = "";
        $scope.details.splice(x, 1);
        $scope.Message = "User deleted Successfully!";
    };
    
    $scope.selectUser = function (detail) {  // select user to update function 
        $scope.selectedUser = detail;
    };
    
    $scope.editUser = function () {  // update user function
        $scope.Message = "User Updated Successfully!";
    };
    
    $scope.clearMessage = function () {
        $scope.Message = "";
    };
    
    $scope.clearError = function () {
        $scope.errortext = "";
    };
});

// This is Orders Controller
app.controller("orderCtrl", function ($scope, $http) {
    'use strict';
    $scope.Title = "Manage Orders";
    $scope.order = {};
    $scope.Message = "";
    $http.get("data/orders.json").then(function (response) {
        $scope.orders = response.data.orders;
    });
    
    $scope.addOrder = function () {  // add Order function 
        $scope.errortext = "";
        if (!$scope.order) {
            $scope.errortext = "The New Order Form is Empty!";
            return;
        }
        if ($scope.orders.indexOf($scope.order) === -1) {
            $scope.orders.push($scope.order);
            $http.post('data/orders.json', $scope.orders);
            $scope.order = {};
            $scope.Message = "New Order Added Successfully!";
        } else {
            $scope.errortext = "The Order is already in your list.";
        }
    };
    
    $scope.removeOrder = function (x) {  // delete order function
        $scope.errortext = "";
        $scope.orders.splice(x, 1);
        $scope.Message = "Order deleted Successfully!";
    };
    
    $scope.selectOrder = function (order) {  // select order to update function 
        $scope.selectedOrder = order;
    };
    
    $scope.editOrder = function () {  // update order function
        $scope.Message = "Order Updated Successfully!";
    };
    
    $scope.clearMessage = function () {
        $scope.Message = "";
    };
    
    $scope.clearError = function () {
        $scope.errortext = "";
    };
});

// This is Products Controller
app.controller("productCtrl", function ($scope, $http) {
    'use strict';
    $scope.Title = "Manage Products";
    $scope.product = {};
    $scope.Message = "";
    $http.get("data/products.json").then(function (response) {
        $scope.products = response.data.products;
    });
    
    $scope.addProduct = function () {  // add product function 
        $scope.errortext = "";
        if (!$scope.product) {
            $scope.errortext = "The New Product Form is Empty!";
            return;
        }
        if ($scope.products.indexOf($scope.product) === -1) {
            $scope.products.push($scope.product);
            $http.post('data/products.json', $scope.products);
            $scope.product = {};
            $scope.Message = "New Product Added Successfully!";
        } else {
            $scope.errortext = "The Product is already in your list.";
        }
    };
    
    $scope.removeProduct = function (x) {  // delete order function
        $scope.errortext = "";
        $scope.products.splice(x, 1);
        $scope.Message = "Product deleted Successfully!";
    };
    
    $scope.selectProduct = function (product) {  // select product to update function 
        $scope.selectedProduct = product;
    };
    
    $scope.editProduct = function () {  // update order function
        $scope.Message = "Product Updated Successfully!";
    };
    
    $scope.clearMessage = function () {
        $scope.Message = "";
    };
    
    $scope.clearError = function () {
        $scope.errortext = "";
    };
});
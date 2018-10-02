/*global angular*/
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {templateUrl : "pages/main.htm", controller  : "mainCtrl"})
        .when("/users", {templateUrl : "pages/users.htm", controller  : "userCtrl"})
        .when("/orders", {templateUrl : "pages/orders.htm", controller  : "orderCtrl"})
        .when("/mails", {templateUrl : "pages/products.htm", controller  : "productCtrl"})
        .otherwise("#", {template : "<h1 class='text-center'>None</h1><p class='text-center'>Nothing has been selected</p>"});
});

app.controller("mainCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("userCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});
app.controller("orderCtrl", function ($scope) {
    $scope.msg = "I love Souel";
});
app.controller("productCtrl", function ($scope) {
    $scope.msg = "I love Cairo";
});

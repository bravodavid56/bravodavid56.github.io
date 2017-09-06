angular
    .module("myApp", ["ngRoute", "SignupCtrl", "ngMaterial"])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: 'MainController'
        })
        .when("/signup", {
            templateUrl: "views/signup.html",
            controller: 'SignupController'
        })
        .when("/main", {
            templateUrl: "views/main.html",
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .dark();
    })
angular
    .module("myApp", ["ngRoute", "SignupCtrl", "ngMaterial"])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<p> hey check </p>",
            controller: 'MainController'
        })
        .when("/aboutme", {
            templateUrl: "views/aboutme.html"
            // need a controller
        })
        .when("/projects", {
            templateUrl: "views/projects.html"
        })
        .when("/contact", {
            templateUrl: "views/contact.html"
        })
        .when("/main", {
            templateUrl: "views/main.html",
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])

    
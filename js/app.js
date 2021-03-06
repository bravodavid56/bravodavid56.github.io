angular
    .module("myApp", ["ngRoute", "SignupCtrl", "ngMaterial"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/aboutme.html",
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
            .otherwise({
                redirectTo: '/'
            })
    }])
    .config(function($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey', {'default':'800'})
            .accentPalette('lime', {'default':'400'});
        
            $mdIconProvider
                .defaultIconSet('images/icons/coding.svg', 24);
           
    })
    .directive('renderMe', function() {
        return {
            templateUrl: 'views/aboutme.html'
        }
    })
    .directive('renderProjects', function() {
        return {
            templateUrl: 'views/projects.html'
        }
    })
    .directive('renderContact', function() {
        return {
            templateUrl: 'views/contact.html'
        }
    })
    .controller('AppCtrl', function($mdColors) {
       this.color1 = $mdColors.getThemeColor('primary');
        this.color2 = $mdColors.getThemeColor('accent');
    })
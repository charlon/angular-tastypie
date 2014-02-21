// Application Module
var demoApp = angular.module('demoApp', ['ngResource', 'ngRoute']);

// Routes
demoApp.config(function ($routeProvider, $locationProvider) {
    
    //enable html5 pushstate
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/',
            {
                controller: 'SimpleController',
                templateUrl: '/static/client/partials/home.html'
            })
        .when('/about',
            {
                controller: 'SimpleController',
                templateUrl: '/static/client/partials/about.html'
            })
        .when('/test',
            {
                controller: 'SimpleController',
                templateUrl: '/static/client/partials/test.html'
            })
        .otherwise({ redirectTo: '/' });
        
});

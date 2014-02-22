// Application Module
var demoApp = angular.module('demoApp', ['ngResource', 'ngRoute']);

// Routes
demoApp.config(function ($routeProvider, $locationProvider) {
    
    //enable html5 pushstate
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/angular',
            {
                controller: 'SimpleController',
                templateUrl: '/static/angular/partials/home.html'
            })
        .when('/angular/about',
            {
                controller: 'SimpleController',
                templateUrl: '/static/angular/partials/about.html'
            })
        .when('/angular/test',
            {
                controller: 'SimpleController',
                templateUrl: '/static/angular/partials/test.html'
            })
        .otherwise({ redirectTo: '/angular' });
        
});

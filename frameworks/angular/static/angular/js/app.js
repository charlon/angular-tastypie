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

// stop built-in interception of clicks ( clicking on / won't go anywhere )
// http://stackoverflow.com/questions/16755240/external-links-in-angular-app
/*
demoApp.run(function($location, $rootElement) {
    $rootElement.off('click');
});
*/
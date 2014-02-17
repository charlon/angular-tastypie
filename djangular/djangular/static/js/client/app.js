// Application Module
var demoApp = angular.module('demoApp', ['ngResource']);

// Routes
demoApp.config(function ($routeProvider, $locationProvider) {
    
    //enable html5 pushstate
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/',
            {
                controller: 'SpaceController',
                templateUrl: '/views/spaces.html'
            })
        .when('/about',
            {
                controller: 'SimpleController',
                templateUrl: '/views/about.html'
            })
        .otherwise({ redirectTo: '/' });
        
});

// Application Module
var demoApp = angular.module('demoApp', ['ngResource', 'ngRoute']);

// Routes
demoApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
    
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
        .when('/angular/badges',
            {
                controller: 'BadgeController',
                templateUrl: '/static/angular/partials/badges.html'
            })
        .otherwise({ redirectTo: '/angular' });
        
     // angularjs loading indicator http://mandarindrummond.com/articles/angular-global-loading-indicator/index.html
     
     $httpProvider.interceptors.push(function($q, $rootScope) {
        return {
            'request': function(config) {
                $rootScope.$broadcast('loading-started');
                return config || $q.when(config);
            },
            'response': function(response) {
                $rootScope.$broadcast('loading-complete');
                return response || $q.when(response);
            }
        };
    });
    
});


demoApp.directive("loadingIndicator", function() {
    return {
        restrict : "A",
        template: "loading via angular...",
        link : function(scope, element, attrs) {
            scope.$on("loading-started", function(e) {
                element.css({"display" : ""});
            });

            scope.$on("loading-complete", function(e) {
                element.css({"display" : "none"});
            });

        }
    };
});
        
        
// stop built-in interception of clicks ( clicking on / won't go anywhere )
// http://stackoverflow.com/questions/16755240/external-links-in-angular-app
/*
demoApp.run(function($location, $rootElement) {
    $rootElement.off('click');
});
*/
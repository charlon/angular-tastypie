// SimpleController
demoApp.controller('SimpleController', function ($scope) {

   // do some controller stuff

   // example of a function
   $scope.someFunction = function () {
       // functionality here
   };

});

// BadgeController
demoApp.controller('BadgeController', function ($scope, BadgeFactory) {

    $scope.badges = [];

    init();

    function init() {
        $scope.badges = BadgeFactory.Badge.all();
    }

});
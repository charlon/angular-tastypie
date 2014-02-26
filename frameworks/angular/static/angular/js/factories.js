// SpaceFactory: example using $resource call to mock REST api
demoApp.factory('BadgeFactory', function ($resource) {

    return {
        Badge: $resource('http://localhost:8000/api/v1/badges?format=json', {
            id: '@id',
            name: '@name',
            descript: '@description'
        }, {
            all: {
                method: 'GET',
                isArray: true
            },
            get: {
                method: 'GET'
            }
        })
    };

});
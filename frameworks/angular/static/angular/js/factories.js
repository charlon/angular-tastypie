// BadgeFactory: example using $resource call to REST api

demoApp.factory('BadgeFactory', function ($resource) {

    return {
        Badge: $resource('/api/v1/badges?format=json', {
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
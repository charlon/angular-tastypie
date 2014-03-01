var AppRouter = Backbone.Router.extend({
 
    routes: {
        '/backbone' : 'index',
        '/backbone/about' : 'about',
        '/backbone/test' : 'test'
    },
    
});

// Initiate the router
var app_router = new AppRouter;

app_router.on('route:index', function() {
    alert("bakjdsfakjsdf");
});

Backbone.history.start();


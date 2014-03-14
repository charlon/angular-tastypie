/*** ember app ***/

App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: $('#ember_application')
});


/*** router **/

App.Router.reopen({
    rootURL: '/ember',
    location: 'history' 
})

App.Router.map(function() {
    this.route("about", { path: "/about" });
    this.route("test", { path: "/test" });
    this.route("badges", { path: "/badges" });
});

App.AboutRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('about');
    }
});

App.TestRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('test');
    }
});

App.BadgesRoute = Ember.Route.extend({ 
    renderTemplate: function() {
        this.render('badges');
    }
    /*model: function() {
        return App.Badge.find();
    }*/
});



/*** ember app ***/

App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: $('#ember_application')
});


/*** router **/

/*clean urls*/
App.Router.reopen({
    rootURL: '/ember',
    location: 'history' 
})

App.Router.map(function() {
    this.route("about", { path: "/about" });
});

App.AboutRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('about');
    }
});
/*** ember app ***/

App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: $('#ember_application')
});


/*** ember-data example NOT USED YET ***/

/*
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Badge = DS.Model.extend({
    id: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string')
});
*/

/*** routers **/

App.Router.reopen({
    rootURL: '/ember',
    location: 'history' 
})

App.Router.map(function() {

    //this.route("about", { path: "/about" });
    //this.route("test", { path: "/test" });
    //this.route("badges", { path: "/badges" });
    //this.resource("badge", { path: "/badge/:id"});
    
    this.resource("about");
    this.resource("test");
    this.resource("badges");
});

/*** controllers ****/

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
    model: function() {
        // jquery request to api
        return $.getJSON('/api/v1/badges').then(function(data){
            return data;
        })
    }
});




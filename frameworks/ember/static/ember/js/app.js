/*** ember app ***/

App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    rootElement: $('#ember_application')
});


/*** ember-data example ***/

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Badge = DS.Model.extend({
    id: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string')
});

/*** fixtures ***/

App.Badge.FIXTURES = [
    {
        "id": 1, 
        "name": "INhR51cR", 
        "description": "MP5fEjg1xynSzkkMAC1u", 
        "presenters": "9owxJCBj", 
        "badge_class": "f2VAi12E", 
        "badge_pin": 0
    }, 
    {
        "id": 2, 
        "name": "nYBVtFpk", 
        "description": "lzMFhJfzY0xukz1kLAqq", 
        "presenters": "SPeXPoPf", 
        "badge_class": "rCpiILh4", 
        "badge_pin": 1
    }, 
    {
        "id": 3, 
        "name": "J0NfnOCc", 
        "description": "6uaE0MqlcNj4s1T7s4nk", 
        "presenters": "0xWIHy5R", 
        "badge_class": "EC6PfkKo", 
        "badge_pin": 2
    }, 
    {
        "id": 4, 
        "name": "VyxKsSNS", 
        "description": "ML4tgkasxG3dCjHJ2skc", 
        "presenters": "DITVqpGV", 
        "badge_class": "uXlLWKYR", 
        "badge_pin": 3
    }, 
    {
        "id": 5, 
        "name": "c1lqGs5R", 
        "description": "4hFVTyY6Y3XNRE3ImLN9", 
        "presenters": "YdnN6Zz0", 
        "badge_class": "6ynY65Mi", 
        "badge_pin": 4
    }
];



/*** router **/

App.Router.reopen({
    rootURL: '/ember',
    location: 'history' 
})

App.Router.map(function() {
    this.route("about", { path: "/about" });
    this.route("test", { path: "/test" });
    //this.route("badges", { path: "/badges" });
    //this.resource("badge", { path: "/badge/:id"});
    
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
    /*renderTemplate: function() {
        this.render('badges');
    }*/
    model: function() {
        return this.store.find('badge'); // ember-data
        //return App.Badge.find(); // ember-model
    }
});

/*** ember-model example ***/

/*
App.Badge = Ember.Model.extend({
    id: Ember.attr(),
    name: Ember.attr(),
    description: Ember.attr()
});
*/

//App.Badge.adapter = Ember.FixtureAdapter.create();




// router

var AppRouter = Backbone.Router.extend({
    
    initialize: function(el) {
		
		this.el = el;
		this.index = new ContentView({template: '#index'});
		this.about = new ContentView({template: '#about'});
		this.test = new ContentView({template: '#test'});
	},
	
    routes: {
        '/backbone' : 'index',
        '/backbone/about' : 'about',
        '/backbone/test' : 'test',
    },
    
    currentView: null,

	switchView: function(view) {
		if (this.currentView) {
			// Detach the old view
			this.currentView.remove();
		}

		// Move the view element into the DOM (replacing the old content)
		this.el.html(view.el);

		// Render view after it is in the DOM (styles are applied)
		view.render();

		this.currentView = view;
	},
	
	index: function() {
        this.switchView(this.index);    	
	},
	
	about: function() {
        this.switchView(this.test);    	
	},
	
	test: function() {
        this.switchView(this.test);    	
	}
    
});

// view

Backbone.View = Backbone.View.extend({

	remove: function() {
		// Empty the element and remove it from the DOM while preserving events
		$(this.el).empty().detach();

		return this;
	}

});


var ContentView = Backbone.View.extend({

	/*
	 * Initialize with the template-id
	 */
	initialize: function(options) {
		this.template = options.template;
	},

	/*
	 * Get the template content and render it into a new div-element
	 */
	render: function() {
		var content = $(this.template).html();
		$(this.el).html(content);

		return this;
	}

});

// Initiate the router
var app_router = new AppRouter($('#content'));
Backbone.history.start();


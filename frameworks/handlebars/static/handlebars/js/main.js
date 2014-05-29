$(function() {
    
    var pathname;
    
    // once the page has fully loaded...
    
    $(window).bind("load", function() {
        
        // ROUTING FOR HANDLING FUNCTIONS AFTER PAGE LOADS
    
        pathname = window.location.pathname;
        
        // if on "badges" page
        if(pathname.indexOf("/handlebars/badges") >= 0) {
           
            console.log("load handlebars badges");
           
            setTimeout(function() {
                loadBadges();
            }, 100);
            
        }
        else if (pathname.indexOf("/handlebars/test") >= 0) {
            console.log("load handlebars test");
        }
        else if (pathname.indexOf("/handlebars/about") >= 0) {
            console.log("load handlebars about");
        }  
    
                
    });

         
});

// HANDLEBARS FUNCTIONS

function loadBadges() {
    
    console.log("start loading badges");
            
    // get the badges json from the data-badges attribute
    var badge_json = $('#badge_list_container').data('badges');
    
    // give context
    var context = { badges: badge_json };
    
    console.log(context);
        
    // compile handlebars template and render
    var template = Handlebars.compile($('#tpl-badge-list').html()),
        rendered = template(context);
                                    
    // paint it in the badge list container
    $("#badge_list_container").html(rendered);
      
    console.log("handlebars badges loaded");
    
}
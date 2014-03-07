$(function() {
    
    
    // check to see if the badge list container exists... if so, start the display process via handlebars    
    if( $("#badge_list_container" ).length > 0) {
    

      // get the badges json from the data-badges attribute
        var stuff = $('#badge_list_container').data('badges');
        
        // give context
        var context = { badges: stuff };
    
        // compile handlebars template and render
        var template = Handlebars.compile($('#tpl-badge-list').html()),
            rendered = template(context);
                                        
        // delay the rendering of badges
        setTimeout(function () {
        
            // paint it in the badge list container
            $("#badge_list_container").html(rendered);
        
        }, 100);

    }
    
        
});
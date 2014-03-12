$(function() {
    
    $(window).bind("load", function() {
        
        // calculate total loading time
        endTime = (new Date()).getTime();
        millisecondsLoading = endTime - startTime;
        
        if(millisecondsLoading >= 1000) {
            // convert to seconds        	
        	millisecondsLoading = (millisecondsLoading / 1000) + " s";
        } 
        else {
        	millisecondsLoading = millisecondsLoading + " ms";
        }
        
        $("#load_timer").html(millisecondsLoading);
            
    });
        
    // check to see if the badge list container exists... if so, start the display process via handlebars    
    if( $("#badge_list_container" ).length > 0) {
    

      // get the badges json from the data-badges attribute
        var badge_json = $('#badge_list_container').data('badges');
        
        // give context
        var context = { badges: badge_json };
    
        // compile handlebars template and render
        var template = Handlebars.compile($('#tpl-badge-list').html()),
            rendered = template(context);
                                        
        // delay the rendering of badges
        setTimeout(function () {
        
            // paint it in the badge list container
            $("#badge_list_container").html(rendered);
                        
            // calculate total loading time
            endTime = (new Date()).getTime();
            millisecondsLoading = endTime - startTime;
            
            if(millisecondsLoading >= 1000) {
                // convert to seconds        	
            	millisecondsLoading = (millisecondsLoading / 1000) + " s";
            } 
            else {
            	millisecondsLoading = millisecondsLoading + " ms";
            }
            
            $("#hb_timer").html(millisecondsLoading);
        
        }, 10);

    }
 
});
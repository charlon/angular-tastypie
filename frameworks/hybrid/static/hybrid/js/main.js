$(function() {
    
    var pathname;
    
    // once the page has fully loaded...
    
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
        
        // display the time to render
        
        $("#load_timer").html(millisecondsLoading);
        
        // ROUTING FOR HANDLING FUNCTIONS AFTER PAGE LOADS
    
        pathname = window.location.pathname;
        
        // if on "badges" page
        if(pathname.indexOf("/hybrid/badges") >= 0) {
           
            console.log("load hybrid badges");
           
            setTimeout(function() {
                loadBadges();
            }, 100);
            
        }
        else if (pathname.indexOf("/hybrid/test") >= 0) {
            console.log("load hybrid test");
        }
        else if (pathname.indexOf("/hybrid/about") >= 0) {
            console.log("load hybrid about");
        }  
    
                
    });

         
});

// HANDLEBARS FUNCTIONS

function loadBadges() {
    
    console.log("start loading badges");
            
    // start the timer
    var hybridStart, hybridEnd, hybridMilliseconds;
    hybridStart = (new Date()).getTime();    
    

    // get the badges json from the data-badges attribute
    var badge_json = $('#badge_list_container').data('badges');
    
    // give context
    var context = { badges: badge_json };
        
    // compile handlebars template and render
    var template = Handlebars.compile($('#tpl-badge-list').html()),
        rendered = template(context);
                                    
    // paint it in the badge list container
    $("#badge_list_container").html(rendered);
                
    // calculate total loading time
    hybridEnd = (new Date()).getTime();
    hybridMilliseconds = hybridEnd - hybridStart;
    
    if(hybridMilliseconds >= 1000) {
        // convert to seconds        	
    	hybridMilliseconds = (hybridMilliseconds / 1000) + " s";
    } 
    else {
    	hybridMilliseconds = hybridMilliseconds + " ms";
    }
    
    $("#hb_timer").html(hybridMilliseconds);
    
    console.log("handlebars badges");
    
}
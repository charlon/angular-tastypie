$(function() {
    
    var startTime, endTime, millisecondsLoading;
    var pathname;
    
    $(document).pjax('a[data-pjax]', '#pjax-container',  {timeout: 10000})
     
    $('#pjax-container').on("pjax:start", function() {
        
        // start the timer on the initial pjax request
        startTime = (new Date()).getTime();
    });
    
    $('#pjax-container').on("pjax:send", function(e) {
        
        pathname = window.location.pathname;
        
        // if PJAX is taking longer than 250ms... show the loading message & hide existing content
        loadingTimeout = setTimeout(function() {
            $("#pjax-loading").removeClass('hidden');
            $('#pjax-container').addClass('hidden');
        }, 250);
          
    });

    $('#pjax-container').on("pjax:complete", function() {
                
        // once pjax completes... hide the loading message and make sure the content is showing    
        $("#pjax-loading").addClass('hidden');
        $('#pjax-container').removeClass('hidden');
        
        // cancel showing the message when the ajax call completes.
        clearTimeout(loadingTimeout);
        
    });
    
    
    $('#pjax-container').on("pjax:end", function() {
        
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
        
        // HANDLEBARS ROUTING
        
        // if on "badges" page when the pjax request finishes        
        if (pathname.indexOf("/pjax/badges") >= 0) {
            
            // wait 1ms before loading badges... or else pjax will wait to load entire page all at once
            setTimeout(function() {
                loadBadges();
            }, 1);
        }     
             
                                
    });
    
    $('#pjax-container').on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    });
    
    
    // HANDLEBARS FALLBACK ROUTING: handle non-pjax requests (basic get request)
        
    $(document).ready(function () {
        
        pathname = window.location.pathname;
        
        if(pathname.indexOf("/pjax/badges") >= 0) {
           //console.log("basic get requested");
           loadBadges();
        }
    });
       
});


// HANDBLEBAR TEMPLATE FUNCTIONS    
function loadBadges() {
                
    // start the timer
    var hybridStart, hybridEnd, hybridMilliseconds;
    hybridStart = (new Date()).getTime();    
    

    // get the badges json from the data-badges attribute
    var badge_json = $('#badge_list_container').data('badges');
    
    // give context
    var context = { badges: badge_json };
    
    //console.log(context);
    
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
    
}
var nextUrl, loadingTimeout;
var processing_badges = false;
var pathname;
    
// document.ready shorthand
$(function() {
    
    
        
    $(document).pjax('a[data-pjax]', '#pjax-container',  {timeout: 10000})
     
    $('#pjax-container').on("pjax:send", function(e) {
        
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
                
        // handle url routes
        handleRoutes();
        
    });
        
    $('#pjax-container').on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    });

}); 
    
// ### GLOBAL LOAD EVENT (pjax fallback) ###############
/*
$(window).load(function() {
    // handle url routes
    handleRoutes();
});
*/

$(window).load(handleRoutes);

// ### GLOBAL SCROLLING EVENT (pjax and non-pjax scrolling )###############

$(window).scroll(function() {
    
    pathname = window.location.pathname;
    
    // if on "badges" page
    if(pathname.indexOf("/pjax/badges") >= 0) {
                        
        // if scrolled to the bottom... AND currently not processing any badge requests (bounce hack)
        if($(window).scrollTop() + $(window).height() == $(document).height() && !processing_badges) {
                    
            // get the url for the next set of data
            nextUrl = $('.next-url:last').attr("data-next-url");
            
            console.log("next to load: " + nextUrl);
            
            // check to see if next is none, if so return false... 
            if (nextUrl == 'None'){
                return false;
            } 
            // otherwise, load the next next set of data
            else {
                
                // set processing to true so you get the next set of badges
                processing_badges = true;
                
                $("#badge_list_loading").show();
                
                // wait a tiny bit before loading...
                setTimeout(function() {
                    loadBadgeList(nextUrl);
                    // set processing back to false so bounce requests don't fire
                    processing_badges = false;
                }, 250);
            }
        
        }
        
    }
    
});
        


function handleRoutes(jQuery) {
    
    // ROUTING FOR PJAX
    pathname = window.location.pathname;
        
    // if on "badges" page
    if(pathname.indexOf("/pjax/badges") >= 0) {
       console.log("loaded badges");
       loadBadgeList();
    }
    else if (pathname.indexOf("/pjax/test") >= 0) {
        console.log("loaded test");
    }
    else if (pathname.indexOf("/pjax/about") >= 0) {
        console.log("loaded about");
    }
    else {
        console.log("loaded home");
    }
}

function loadBadgeList(url) {

    var badgeStart, badgeEnd, badgeMilliseconds;
    var protocol = window.location.protocol;
    var host = window.location.host;
    
    // start the timer
    badgeStart = (new Date()).getTime();
    
    // check to see if a url was passed, if not... start at the beginning
    if (typeof url == 'undefined'){
        url = protocol + '//' + host + '/api/v1/badges?page=1'
    }
    
    // render the badgelist partial for the url that was passed
    $.get('/pjax/partials/badgelist?url=' + url, function(data){ 
        
        // append the data to the badge container
        $(data).appendTo('#badge_list_container');
        
        console.log("loaded: " + url);
    
        // hide the badge loading spinner
        $("#badge_list_loading").hide();
        
    });

}





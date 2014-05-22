var startTime, endTime, millisecondsLoading;
var nextUrl, loadingTimeout;

var processing_badges = false;
var pathname = window.location.pathname;


$(document).on('page:fetch', function() {
  //$(".loading-indicator").show();
    
    // start the timer on the initial pjax request
    startTime = (new Date()).getTime();
        
});

$(document).on('page:receive', function() {
  //$(".loading-indicator").hide();
});



// ready function for all starting actions
var ready;
ready = function() {
    
    // get the current location
    pathname = window.location.pathname;
    
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
        
        
    // on the "badges" page
    if(pathname.indexOf("/turbolinks/badges") >= 0) {
       loadBadgeList();
    }

};

$(document).ready(ready);
$(document).on('page:load', ready);


$(document).scroll(function() {
    
    //on the "badges" page
    if(pathname.indexOf("/turbolinks/badges") >= 0) {
                        
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
    $.get('/turbolinks/partials/badgelist?url=' + url, function(data){ 
        
        // append the data to the badge container
        $(data).appendTo('#badge_list_container');
        
        console.log("loaded: " + url);
        
        // calculate total loading time
        badgeEnd = (new Date()).getTime();
        badgeMilliseconds = badgeEnd - badgeStart;
        
        if(badgeMilliseconds >= 1000) {
            // convert to seconds        	
        	badgeMilliseconds = (badgeMilliseconds / 1000) + " s";
        } 
        else {
        	badgeMilliseconds = badgeMilliseconds + " ms";
        }
        
        // display the time to render
        $("#badge_list_timer").html(badgeMilliseconds);
     
        // hide the badge loading spinner
        $("#badge_list_loading").hide();
        
    });

}





$(function() {
    
    var startTime, endTime, millisecondsLoading;
    var pathname;
        
    $(document).pjax('a[data-pjax]', '#pjax-container',  {timeout: 10000})
     
    $('#pjax-container').on("pjax:send", function(e) {
        
         // start the timer on the initial pjax request
        startTime = (new Date()).getTime();
        
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
        
        // ROUTING FOR AJAX LOADED PARTIALS
        
        pathname = window.location.pathname;
        
        // if on "badges" page      
        if (pathname.indexOf("/pjax/badges") >= 0) {
            
            console.log("pjax badges");
            
            // wait 100ms before loading badges... or else pjax will wait to load entire page all at once
            setTimeout(function() {
                //loadBadges();
                loadBadgeList();
            }, 100);
                        
        }
        else if (pathname.indexOf("/pjax/test") >= 0) {
            console.log("pjax test");
        }
        else if (pathname.indexOf("/pjax/about") >= 0) {
            console.log("pjax about");
        }
        
    });
        
    $('#pjax-container').on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    });
    

        
    // ROUTING FALL-BACK FOR NON-PJAX REQUESTS
    
    pathname = window.location.pathname;
    
    // if on "badges" page
    if(pathname.indexOf("/pjax/badges") >= 0) {
       
       console.log("no pjax badges");
       
       // wait 100ms before loading badges... or else pjax will wait to load entire page all at once
        setTimeout(function() {
            //loadBadges();
            loadBadgeList();
        }, 100);
        
    }
    else if (pathname.indexOf("/pjax/test") >= 0) {
        console.log("no pjax test");
    }
    else if (pathname.indexOf("/pjax/about") >= 0) {
        console.log("no pjax about");
    }    
       
});


// PARTIAL VIEW FUNCTIONS

function loadBadgeList() {

    // start the timer
    var badgeStart, badgeEnd, badgeMilliseconds;
    badgeStart = (new Date()).getTime();    
    
    $('#badge_list_test').load('/pjax/partials/badgelist', function() {
            
        console.log("badgelist loaded via ajax");
        
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
        
        $("#badgelist_timer").html(badgeMilliseconds);

    });
    
    
}
$(function() {
    
    var startTime, endTime, millisecondsLoading;
    var pathname, nextUrl;
        
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
            
            loadBadgeList();
                         
        }
        else if (pathname.indexOf("/pjax/test") >= 0) {
            console.log("pjax test");
        }
        else if (pathname.indexOf("/pjax/about") >= 0) {
            console.log("pjax about");
        }
        
        
        // LOAD MORE CLICK-EVENT (SHOULD PASS NEXT)    
        $('#badge_list_load_more a').click(function(event) {
            event.preventDefault();
            console.log( "load more clicked..." );
            
            nextUrl = $('.next-url:last').attr("data-next-url");
            console.log(nextUrl);
        
            // hide the load more
            $('#badge_list_load_more').hide();
            // show the spinner 
            $("#badge_list_loading").show();
            
            loadBadgeList(nextUrl);
        });
    
        
    });
        
    $('#pjax-container').on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    });
    
    
    // ### PJAX FALLBACKS ###########
        
    // ROUTING FALL-BACK FOR NON-PJAX REQUESTS
    pathname = window.location.pathname;
    
    // if on "badges" page
    if(pathname.indexOf("/pjax/badges") >= 0) {
       
       console.log("no pjax badges");

       loadBadgeList();

    }
    else if (pathname.indexOf("/pjax/test") >= 0) {
        console.log("no pjax test");
    }
    else if (pathname.indexOf("/pjax/about") >= 0) {
        console.log("no pjax about");
    } 
    
    //  LOAD MORE CLICK-EVENT (SHOULD PASS NEXT) FALLBACK FOR NON-PJAX REQUESTS
    $('#badge_list_load_more a').click(function(event) {
        event.preventDefault();
        console.log( "load more clicked..." );
        
        nextUrl = $('.next-url:last').attr("data-next-url");
          
        // hide the load more
        $('#badge_list_load_more').hide();
        // show the spinner 
        $("#badge_list_loading").show();
        
        loadBadgeList(nextUrl);
    });
    
});


function loadBadgeList(url) {
         
    // start the timer
    var badgeStart, badgeEnd, badgeMilliseconds;
    badgeStart = (new Date()).getTime();    

    if (typeof url == 'undefined'){
        url = 'http://curry.eplt.washington.edu:8000/api/v1/badges?page=1&format=json'
    }

    console.log(url);

    $.get('/pjax/partials/badgelist?url=' + url, function(data){ 
        
        $(data).appendTo('#badge_list_container');
        
        console.log("badgelist loaded via get request");
        
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
        
        nextUrl = $('.next-url:last').attr("data-next-url");
        
        // show or hide the load more based on if there is a nextURL
        if (nextUrl == 'None'){
            $("#badge_list_load_more").hide();
        } 
        else { 
            $("#badge_list_load_more").show();
        }
        
        // hide the badge loading spinner
        $("#badge_list_loading").hide();
        
            
    });

}





var nextUrl, loadingTimeout;
var processing_badges = false;
var pathname; 

$(document).on('page:fetch', function() {
    
});

$(document).on('page:receive', function() {

});


$(document).on('ready page:load', handleRoutes);
    
$(document).scroll(function() {
    
    // get the current location
    pathname = window.location.pathname;
    
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
                }, 350);
            }
        
        }
        
    }
    
});

function handleRoutes() {
    
    // ROUTING FOR Turbolinks
    pathname = window.location.pathname;
        
    // if on "badges" page
    if(pathname.indexOf("/turbolinks/badges") >= 0) {
       console.log("loaded badges");       
       loadBadgeList();
    }

    
}

        
function loadBadgeList(url) {
        
    var protocol = window.location.protocol;
    var host = window.location.host;
    
    // check to see if a url was passed, if not... start at the beginning
    if (typeof url == 'undefined'){
        url = protocol + '//' + host + '/api/v1/badges?page=1'
        //url = protocol + '//' + host + '/api/v1/badges?page_size=12'
    }
    
    // make an ajax request for the badgelist partial    
    $.ajax({
        type: 'GET',
        url: '/turbolinks/partials/badgelist?url=' + url,
        beforeSend:function(){
            // this is where we append a loading image
            console.log("loading...");
            
            // show the badge loading spinner
            $("#badge_list_loading").show();
        },    
        success:function(data){
            
            // append the data to the badge container
            $(data).appendTo('#badge_list_container');
            
            console.log("loaded: " + url);
         
            // hide the badge loading spinner
            $("#badge_list_loading").hide();
            
        },
        error:function() {
            console.log("error fetching badgelist partial...");
        }
    });


}





var nextUrl, loadingTimeout;
var processing_badges = false;
var pathname; 

$(document).ready(function() {
    
    
    
    // once the page has fully loaded...
    
    $(window).bind("load", function() {
        
        // ROUTING FOR HANDLING FUNCTIONS AFTER PAGE LOADS
    
        pathname = window.location.pathname;
        
        // if on "badges" page
        if(pathname.indexOf("/handlebars/badges") >= 0) {
           
            console.log("load handlebars badges");
           
            setTimeout(function() {
                loadBadgeList();
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

$(document).scroll(function() {
    
    // get the current location
    pathname = window.location.pathname;
    
    //on the "badges" page
    if(pathname.indexOf("/handlebars/badges") >= 0) {
        
        
        // if scrolled to the bottom... AND currently not processing any badge requests (bounce hack)
        if($(window).scrollTop() + $(window).height() == $(document).height() && !processing_badges) {
             
            console.log("at the bottom!");
                   
            // get the url for the next set of data
            nextUrl = $('#badge_list_container').data('nextpage');
            
            // TODO: STRIP OUT THE HOSTNAME AND EVERYTHING ELSE EXCEPT the value for page=
            
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

// HANDLEBARS FUNCTIONS

function loadBadgeList(url) {
    
    var protocol = window.location.protocol;
    var host = window.location.host;
    
    console.log("url:  " + url);
    
    // check to see if a url was passed, if not... start at the beginning
    if (typeof url == 'undefined'){
        url = protocol + '//' + host + '/api/v1/badges?page=1'
    }
    
    console.log("start loading badges");
            
    // make an ajax request for the badgelist partial    
    $.ajax({
        type: 'GET',
        url: '/handlebars/badges?url=' + url,
        beforeSend:function(){
            // this is where we append a loading image
            console.log("loading...");
            
            // show the badge loading spinner
            $("#badge_list_loading").show();
        },    
        success:function(data){
            
            // get the badges json from the data-badges attribute
            var badge_json = $('#badge_list_container').data('badges');
            var nextpage_json = $('#badge_list_container').data('nextpage');
            
            // give context
            var context = { badges: badge_json, nextpage: nextpage_json };
            
            console.log(context);
                
            // compile handlebars template and render
            var template = Handlebars.compile($('#tpl-badge-list').html()),
                rendered = template(context);
                                            
            // paint it in the badge list container
            $("#badge_list_container").append(rendered);
              
            console.log("handlebars badges loaded");
            
            // hide the badge loading spinner
            $("#badge_list_loading").hide();
            
        },
        error:function() {
            console.log("error fetching badgelist partial...");
        }
    });
    
}
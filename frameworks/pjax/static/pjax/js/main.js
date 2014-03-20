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
        
        // if it's taken longer than 250ms... show the loading message & hide existing content
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
        //clearTimeout(loadingTimeout);
        
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
                
        if (pathname.toLowerCase().indexOf("badges") >= 0) {
            alert( "success" );
        }     
        
        console.log(pathname);
     
                                
    });
    
    $('#pjax-container').on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    });
       
});
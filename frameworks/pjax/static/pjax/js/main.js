$(function() {
    
    var startTime, endTime, millisecondsLoading;
    
    $(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container',  {timeout: 10000})
    
    $(document).on("pjax:start", function() {

        console.log("start");
        
        // start the timer on the initial pjax request
        startTime = (new Date()).getTime();
    });
    
    
    $(document).on("pjax:send", function(e) {
        
        
        
        // if it's taken longer than 250ms... show the loading message & hide existing content
          loadingTimeout = setTimeout(function() {
                $("#pjax-loading").removeClass('hidden');
                $('#pjax-container').addClass('hidden');
          }, 250);
          
          console.log("send");
    });

    $(document).on("pjax:complete", function() {
                
        // once pjax completes... hide the loading message and make sure the content is showing    
        $("#pjax-loading").addClass('hidden');
        $('#pjax-container').removeClass('hidden');
        
        // cancel showing the message when the ajax call completes.
        clearTimeout(loadingTimeout);
        
        
        console.log("complete");
        
    });
    
    
    
    $(document).on("pjax:end", function() {
        console.log("end");
        
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
        
        //window.location.href = "/home";
        
    });
    
    $(document).on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    });
       
});
$(function() {
    
    $(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container',  {timeout: 10000})
    
    $(document).on("pjax:send", function(e) {
        
        
        // if it's taken longer than 250ms... show the loading message & hide existing content
          loadingTimeout = setTimeout(function() {
                $("#pjax-loading").show();
                $('#pjax-container').hide();
          }, 250);
    
    });

    $(document).on("pjax:complete", function() {
                
        // once pjax completes... hide the loading message and make sure the content is showing    
        $("#pjax-loading").hide();
        $('#pjax-container').show();
        
        // cancel showing the message when the ajax call completes.
        clearTimeout(loadingTimeout);
        
    });
    
    $(document).on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault();
    })
    
});
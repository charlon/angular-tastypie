$(function() {
    
    $(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container')
    
    $(document).on("pjax:beforeSend", function(e) {
        $("#pjax-loading").removeClass("hidden");
        $('#pjax-container').hide();
    });

    $(document).on("pjax:complete", function() {
        $("#pjax-loading").addClass("hidden");
        $('#pjax-container').show();
    });
    
    $(document).on('pjax:timeout', function(event) {
        // Prevent default timeout redirection behavior
        event.preventDefault()
    })
    
    
});
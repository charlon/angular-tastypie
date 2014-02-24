$(function() {
    
    $document = $(document);

    $document.on('ready pjax:end', function() {
        
        // Use this for document ready code
             
    });
    
    $document.pjax('a[data-pjax]', '#pjax-container', {
        timeout: 3000
    });
    
});
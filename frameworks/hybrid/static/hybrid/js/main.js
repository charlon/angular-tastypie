$(function() {
    
    var stuff = $('#badge_list_container').data('badges');
    
    console.log(stuff);
    
    // compile handlebars template
    var template = Handlebars.compile($('#tpl-badge-list').html()),
        rendered = template({ badgestuff: stuff });
                
    // simulate a delayed rendering time
    setTimeout(function () {
    
        // paint it in the badge list container
        $("#badge_list_container").html(rendered);
    
    }, 400);
        
        
});
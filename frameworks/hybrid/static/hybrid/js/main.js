$(function() {
    
    // get the badges json from the data-badges attribute
    var stuff = $('#badge_list_container').data('badges');
    
    // give context
    var context = { badges: stuff };

    // compile handlebars template and render
    var template = Handlebars.compile($('#tpl-badge-list').html()),
        rendered = template(context);
                
    // simulate a delayed rendering time
    setTimeout(function () {
    
        // paint it in the badge list container
        $("#badge_list_container").html(rendered);
    
    }, 400);
        
        
});
$(function() {
    
    var properties = {
        total: 10,
        min: 4,
        max: 5
    };

    // compile handlebars template
    var template = Handlebars.compile($('#tpl-badge-list').html()),
        rendered = template(properties);
                
    // paint it where? at the end of the content
    //$("#badge_list_container").html(rendered);

    // simulate a longer rendering time
    setTimeout(function () {
    
        // paint it where? at the end of the content
        $("#badge_list_container").html(rendered);
    
    }, 900);
        
        
});
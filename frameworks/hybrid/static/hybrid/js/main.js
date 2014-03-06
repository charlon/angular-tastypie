$(function() {
    
    var stuff = $('#badge_list_container').data('badges');
    var badgestuff = jQuery.parseJSON(stuff);
    
    console.log(badgestuff);

    // compile handlebars template
    var template = Handlebars.compile($('#tpl-badge-list').html()),
        rendered = template(badgestuff);
                
    // paint it where? at the end of the content
    //$("#badge_list_container").html(rendered);

    // simulate a longer rendering time
    setTimeout(function () {
    
        // paint it where? at the end of the content
        $("#badge_list_container").html(rendered);
    
    }, 900);
        
        
});
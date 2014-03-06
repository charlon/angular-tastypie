$(function() {
    
    var stuff = $('#badge_list_container').data('badges');
    
    console.log(stuff);
    
    //var blah = jQuery.parseJSON(stuff);
    
   // console.log(typeof(blah));
    
    // compile handlebars template
    var template = Handlebars.compile($('#tpl-badge-list').html()),
        rendered = template({ badgestuff: stuff });
                
    // paint it where? at the end of the content
    $("#badge_list_container").html(rendered);

    // simulate a longer rendering time
    /*setTimeout(function () {
    
        // paint it where? at the end of the content
        $("#badge_list_container").html(rendered);
    
    }, 900);*/
        
        
});
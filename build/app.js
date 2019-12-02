/*scroll function*/

$(document).ready(function(){
    $('#menu').on('click', 'a', function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});

/*menu open*/

$('#menu_button').on('click', function(){
    $('#menu_container').show('slow');
    $('#menu_button').hide();
    console.log('ok')
});

/*menu close*/

$('#menu_close').on('click', function(){
    $('#menu_container').hide();
    $('#menu_button').show('400');
});

$('#form_closed').on('click', function(){
    $('#form').hide('slow');
    console.log('ok')
});

 $('#form_small').on('click', function(){
    $('#form').show('slow');
    console.log('show')
 })
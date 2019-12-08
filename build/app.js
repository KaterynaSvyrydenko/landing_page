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

/*header form closed*/
$('#form_closed').on('click', function(){
    $('#form').hide('slow');
    console.log('ok')
});
/*header form open*/
 $('#form_small').on('click', function(){
    $('#form').show('slow');
    console.log('show')
 });

 $(document).ready(function(){
    if($('.header').width() <= '960'){
        $('#form').hide();
        console.log($('.header').width())
    };
 });
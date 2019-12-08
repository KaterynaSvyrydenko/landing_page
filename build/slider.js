
$(document).ready(function(){
    if($('.clients_slider').width() <= '1100')
        $('.clients_slider').slick({
            infinite: true,
            slidesToShow: 1 ,
            slidesToScroll: 1,
        });
    else 
        if ($('.clients_slider').width() > '1100')
            $('.clients_slider').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            });
    else
        if ($(window).width() <= '960')
            $('.clients_slider').slick('unslick');
});




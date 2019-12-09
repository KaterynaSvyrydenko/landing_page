
function onResize(){
    if ($(window).width() <= '960')
            $('.clients_slider').slick('unslick');
    else if($(window).width() <= '1100')
        $('.clients_slider').slick({
            infinite: true,
            slidesToShow: 1 ,
            slidesToScroll: 1,
        });
    else 
        $('.clients_slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
        });
}
$(document).ready(onResize);

$(window).resize(onResize);



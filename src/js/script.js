$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>', 
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                  dots: '<button type="button" class="slick-dots"></button>',
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

        function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__backside').eq(i).toggleClass('catalog-item__backside_active');
                })
            })
        };
    
    toggleSlide ('.catalog-item__link');
    toggleSlide ('.catalog-item__back'); 

/* modal */
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_min').each(function(i) {
        $(this).on('click', function() {
            $('#oreder, .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    })

/* smooth-scroll */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 900) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


});
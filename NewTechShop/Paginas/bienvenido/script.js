$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }
        else{
            $('.scroll-up-btn').removeClass('show');
        }
    })

    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: "0"});
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    var typed = new Typed(".typing", {
        strings: ["vender.", "encontrar.", "comunicarte.", "localizar ."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed2 = new Typed(".typing2", {
        strings: ["vender.", "encontrar.", "comunicarte.", "localizar ."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
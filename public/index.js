$(document).ready(function() {
     $(".menu-icon").on("click", function() {
           $("nav ul").toggleClass("showing");
           $('nav img').toggleClass('logo-img');
           $('nav img').toggleClass('logo-imag');
     });
});

// Scrolling Effect

$(window).on("scroll", function() {
     if($(window).scrollTop()) {
           $('nav').addClass('black');
            $('nav img').addClass('logo-img');
            $('nav img').removeClass('logo-imag');
     }

     else {
           $('nav').removeClass('black');
           $('nav img').removeClass('logo-img');
             $('nav img').addClass('logo-imag');
     }
});

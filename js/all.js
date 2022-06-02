$(document).ready(function () {
    // 下拉式選單功能
    $('.menu li h3').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().siblings().find('h3').removeClass('active');
    });

    // scroll to top 效果
    $('.goback a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    // Lightbox 燈箱效果
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2000,
        },
    });

});



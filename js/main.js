$(document).ready(function(){

    var swiper = new Swiper(".sec_1_swiper", {
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
    var swiper = new Swiper(".mob_1_swiper", {
        loop: true,
        autoplay: true,
    });

    var swiper = new Swiper(".mob_swiper_2", {
        direction: "vertical",
        loop: true,
        autoplay: true,
    });

    var swiper = new Swiper(".mob_swiper_5", {
        direction: "vertical",
        loop: true,
        autoplay: true,
    });

    $('.ham_wrap').click(function(){

        $('.del_dot').toggleClass('del_dot-active')
        $('.dot_1').toggleClass('dot_1-active')
        $('.dot_2').toggleClass('dot_2-active')
        $('.split_page').toggleClass('split-active')
        
    });

    $(window).scroll(function(){
        var pageY = $(window).scrollTop()
         if(pageY > 300){

            $(".mob_header").css({
                position: 'fixed',
                zIndex: 60,
                backgroundColor: '#ffffffff',
            })
         }else if(pageY < 300){
            $(".mob_header").css({
                position: 'absolute',
                backgroundColor: '#FFFFFF00'
            })
         }
    });

}); //end
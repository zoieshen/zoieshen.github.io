;$(function(){
    //  $("i").on("mouse")
     $('.current').mouseenter(function(){
        $('.menu-two').css('display','block');
        console.log('hhh');
    })
    $('.current').mouseleave(function(){
        $('.menu-two').css('display','none');
        $('.menu-two').mouseenter(function(){
            $('.menu-two').css('display','block');
        })
        $('.menu-two').mouseleave(function(){
            $('.menu-two').css('display','none');
        })
    })

    
})
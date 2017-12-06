;
(function ($) {
    //楼层上面的高度
    var a = $('.a').outerHeight();
    //一楼高度
    var floor1 = $('.book-process').outerHeight();
    //二楼高度
    var floor2 = $('.book-contact').outerHeight();
    //三楼高度
    var floor3 = $('.book-about').outerHeight();
    //四楼高度
    var floor4 = $('.book-strength').outerHeight();
    //五楼高度
    var floor5 = $('.book-check').outerHeight();
    //六楼高度
    var floor6 = $('.book-hot').outerHeight();
    var b = a + floor1;
    var c = b + floor2;
    var d = c + floor3;
    var e = d + floor4;
    var f = e + floor5;
    var g = f + floor6;
    // console.log(floor1,floor2,floor3,floor4,floor5,floor6)
    // console.log(a,b,c,d,e,f,g)
    $(window).scroll(function(){
        var s = $(this).scrollTop();
        if (s > a) {
            $('.book-float-nav').addClass('x');
        }else{
            $('.book-float-nav').removeClass('x');
        }
    })
    $('.book-float-nav').on('click', '.float-nv1', function () {
        $('html,body').animate({
            "scrollTop": a + 30 + "px"
        }, 500)
    })
    $('.book-float-nav').on('click', '.float-nv2', function () {
        $('html,body').animate({
            "scrollTop": b + 70 + "px"
        }, 500)
    })
    $('.book-float-nav').on('click', '.float-nv3', function () {
        $('html,body').animate({
            "scrollTop": c + 110 + "px"
        }, 500)
    })
    $('.book-float-nav').on('click', '.float-nv4', function () {
        $('html,body').animate({
            "scrollTop": d + 150 + "px"
        }, 500)
    })
    $('.book-float-nav').on('click', '.float-nv5', function () {
        $('html,body').animate({
            "scrollTop": e + 190 + "px"
        }, 500)
    })
    $('.book-float-nav').on('click', '.float-nv6', function () {
        $('html,body').animate({
            "scrollTop": f + 230 + "px"
        }, 500)
    })
    $('.book-float-nav').on('click', '.float-nav1-back', function () {
        $('html,body').animate({
            "scrollTop": -g  + "px"
        }, 500)
    })
}(jQuery))
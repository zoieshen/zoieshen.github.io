;
(function ($) {
    //楼层上面的高度
    var a = $('.a').outerHeight();
    //楼层高度
    //一楼高度
    var floor1 = $('.body-floor .content-1').outerHeight();
    //二楼高度
    var floor2 = $('.body-floor .content-2').height();
    //三楼高度
    var floor3 = $('.body-floor .content-3').height();
    //四楼高度
    var floor4 = $('.body-floor .content-4').height();
    var b = a + floor1;
    var c = b + floor2;
    var d = c + floor3;
    var e = d + floor4;
    $(window).scroll(function () {
        var s = $(this).scrollTop();
        if (s > a) {
            $('.floor').addClass('x');
            if (s > a && s < b) {
                $('.floor .one').addClass('on');
            } else {
                $('.floor .one').removeClass('on');
            }
            if (s > b && s < c) {
                $('.floor .two').addClass('on');
            } else {
                $('.floor .two').removeClass('on');
            }
            if (s > c && s < d) {
                $('.floor .three').addClass('on');
            } else {
                $('.floor .three').removeClass('on');
            }
            if (s > 2834) {
                $('.floor .four').addClass('on');
            } else {
                $('.floor .four').removeClass('on');
            }
        } else {
            $('.floor').removeClass('x');
        }
    })
    $('.floor').on('click', '.one', function () {
        $('html,body').animate({
            "scrollTop": a + 30 + "px"
        }, 500)
    })
    $('.floor').on('click', '.two', function () {
        $('html,body').animate({
            "scrollTop": b + 30 + "px"
        }, 500)
    })
    $('.floor').on('click', '.three', function () {
        $('html,body').animate({
            "scrollTop": c + 30 + "px"
        }, 500)
    })
    $('.floor').on('click', '.four', function () {
        $('html,body').animate({
            "scrollTop": d + 30 + "px"
        }, 500)
    })
    $('.floor').on('click', '.five', function () {
        $('html,body').animate({
            "scrollTop": 0 + "px"
        }, 100)
    })
}(jQuery))
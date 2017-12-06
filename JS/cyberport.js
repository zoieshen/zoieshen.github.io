(function ($) {
    $('.box-list img:first-child').css('display', 'block').addClass('active');
    var count = 0;
    //生成指示器
    $('.box-list img').each(function (index) {
        $li = index == 0 ? '<li class="current"></li>' : '<li></li>';
        $('.dot').append($li);
    })
    //清除计时器
    var t = null;
    //绑定下一页按钮
    $('.next').on('click', a = function () {
        clearTimeout(t);
        count++;
        var _this = this;
        $(this).off('click');
        if (count > 2) {
            count = 0;
        }
        $('.dot li').removeClass('current').eq(count).addClass('current');
        $('.box-list img').hide().filter('.active').show().removeClass('active').end().eq(count).addClass('active').fadeIn(1000, function () {
            $(_this).on('click', a);
            t = setTimeout(function () {
                $('.next').click();
            }, 1000)
        });

    })
    //绑定上一页按钮
    $('.prev').on('click', b = function () {
        clearTimeout(t);
        count--;
        console.log(count)
        var _this = this;
        $(this).off('click');
        if (count < 0) {
            count = 2;
        }
        $('.dot li').removeClass('current').eq(count).addClass('current');
        $('.box-list img').hide().filter('.active').show().removeClass('active').end().eq(count).addClass('active').fadeIn(1000, function () {
            $(_this).on('click', b);
            console.log($('.box-list img'));
            t = setTimeout(function () {
                $('.prev').click()
            }, 1000)
        })

    })

    $('.dot li').on('click', function (index) {
        clearTimeout(t);
        count = $(this).index();
        $('.dot li').removeClass('current').eq(count).addClass('current');
        $('.box-list img').hide().filter('.active').show().removeClass('active').end().eq(count).addClass('active').fadeIn(1000, function () {
            t = setTimeout(function () {
                $('.next').click();
            }, 1000)
        })
    })

    t = setTimeout(function () {
        $('.next').click()
    }, 1000)

    //返回顶部
    window.onscroll = function () {
        var doc = document.body.scrollTop ? document.body : document.documentElement;
        var scrollTop = doc.scrollTop || window.pageXOffset;
        $('.scolltop').get(0).style.display = scrollTop > 198 ? "block" : "none";
    }
    $('.scolltop').on('click', function () {
        _backtop();
    })

    function _backtop(num) {
        var doc = document.body.scrollTop ? document.body : document.documentElement;
        var num = num || 2;
        var scrollTop = doc.scrollTop;
        doc.scrollTop = scrollTop - scrollTop / num;
        if (scrollTop <= 0) {
            return;
        }
        setTimeout(function () {
            _backtop(num);
        }, 16)
    }
    // 楼层跳转
    var aHeight = $('.a').outerHeight(true);
    var divHeight = $('.sm-sod-pic').outerHeight(true);
    console.log(aHeight,divHeight)
    $(window).scroll(function () {
       var scrollTop=$(this).scrollTop();
        if(scrollTop>=286){
            $('.tip-flowg').fadeIn(200);   
            $('.sm-lists').fadeIn(200);
        }else{
            $('.tip-flowg').fadeOut(200);   
            $('.sm-lists').fadeOut(200);
        }
        var index = Math.floor(($(this).scrollTop() - aHeight) /divHeight);
        if (index >= 0) {
            $('.flow li').removeClass('active-Z').eq(index+1).addClass('active-Z');
        }else{
            $('.flow li').removeClass('active-Z');
        }

        if(scrollTop>=286 && scrollTop<=(aHeight-1)){
            $('.flow-a1').addClass('active-Z');
        }else{
            $('.flow-a1').removeClass('active-Z');
            
        }  
    })
       
    $('.flow').on('click','.flow-a', function () {
        // $(window).scrollTop(aHeight + divHeight *( $(this).index()-1));
        $('html,body').animate({
           "scrollTop":aHeight +30+ divHeight *( $(this).index()-1)+"px",
        },500)
       
    })
    $('.fllow').on('click',function(){
        $('html,body').animate({
            "scrollTop":aHeight-290+"px",
        })
    })
    //购物车
    $('.gou').on('click',function(){
        $('.cart-con-box').css('display','block');
    })
    $('.nav-car-close').on('click',function(){
        $(this).parents('.cart-con-box').css('display','none');
    })
    //购物车倒计时
    var intDiff=parseInt(3600);
    function timer(intDiff){
        window.setInterval(function(){
        var minute=0,
            sencond=0;
        if(intDiff>0){
            minute=Math.floor(intDiff/60);
            second=Math.floor(intDiff)-(minute*60);
        }
        if(minute<=9){minute="0"+minute};
        if(second<=9){second="0"+second};
        $('.minute_show').html('<s></s>'+minute+'分');
        $('.second_show').html('<s></s>'+second+'秒');
        intDiff--;
    },1000);
    }
    $(function(){
        timer(intDiff);
    })
    $('.lazy').lazyload({
        effect:"fadeIn",
        placeholder:"./images/imagesj/okhqb-loading.gif",
        // threshold:200,
        failure_limit:3000, 
        effect: "fadeIn"
    })
   
}(jQuery))
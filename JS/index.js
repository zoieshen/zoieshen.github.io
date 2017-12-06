$(function(){
    //二级菜单
        function random(){
            return Math.floor(Math.random()*256);
        }
        $(".menu-content").on("mouseenter", ".sub_menu", function(e){
            var color = "rgba("+random()+","+random()+","+random()+",.6)";
            $(this).children(".ml1").addClass("menu_sale-list").css({
            "backgroundColor":color,           
            "opacity":1,
            }).children(".sbu_menu_font").css({
                "display":"block",
            }).finish();
        })
        $(".menu-content").on("mouseleave", ".sub_menu", function(e){
            var $_this = $(this);
            // $_this.children(".menu_sale-list").animate({"opacity":0,},500,function(){
            //     $_this.children(".ml1").removeClass("menu_sale-list").children(".sbu_menu_font").css("display","none");
            // });
            $_this.children(".menu_sale-list").css({
                "opacity":0,
            }).end().children(".ml1").removeClass("menu_sale-list").children(".sbu_menu_font").css("display","none");
        })

    //苗店滑动
        var $root = $('html, body');//先获取到相应的页面高度
        $('.personal_lf-a').click(function() {//点击的元素
            $root.animate({//给获取的元素添加动画效果
                scrollTop: $( $.attr(this, 'href') ).offset().top//让他的高度等于他自己的
            },1000);
            return false;
        });    
    //滚动事件
        var ht = $(".body-height").outerHeight(true);
        var t = $(".Selling").outerHeight(true);
        var t1 = $(".Preferential").outerHeight(true);        
        var t2 = $("#sea-Amoysdf").outerHeight(true);
        var t3 = $("#sea-Boutique").outerHeight(true);
        var t4 = $("#Digita-bottom").outerHeight(true);
        var q = ht+t;
        var q1 =q+t1;
        var q2 =q1+t2;
        var q3 =q2+t3;
        var q4 =q3+t4;
        $(window).scroll(function(){
            var  d  = $(this).scrollTop();
            if(d >= ht && d <= q){
                $(".personal_fixed-lf li").removeClass("active").eq(0).addClass("active");
            };
            if(d >= q && d <=q1){
                $(".personal_fixed-lf li").removeClass("active").eq(1).addClass("active");
            };
            if(d >= q1 && d <=q2){
                $(".personal_fixed-lf li").removeClass("active").eq(2).addClass("active");
            };
            if(d >= q2 && d <=q3){
                $(".personal_fixed-lf li").removeClass("active").eq(3).addClass("active");
            };
            if(d >= q3 && d <=q4){
                $(".personal_fixed-lf li").removeClass("active").eq(4).addClass("active");
            };
        })
    
});
$(function(){
    //轮播图
        $(".Roas-chart:first").css("display","block").addClass("db");
        var count= 0;
        var t = null;

        $(".Roas-chart").each(function(index){//这是指示器
            $li = index == 0?'<li class="bgc"></li>':"<li></li>";
            $(".indicator").append($li)
        })

        $(".indicator>li").on("click",function(){//这是点击指示器让指示器显示那页
            clearTimeout(t);
                var index = $(this).index();
                count = index;
                Getcom();
        })

        function Getcom(){
            // clearTimeout(t);
            $(".indicator>li").removeClass("bgc").eq(count).addClass("bgc");//这是点击事让指示器的bgc变色;
            $(".Roas-chart").finish().hide().filter(" db").removeClass(" db").end().eq(count).addClass(" db").fadeIn(function(){
                clearTimeout(t);
                t = setTimeout(function(){
                        Get()
                    },2000)
                });
        }
        function Get(){//这是核心内容封装到函数里
            // clearTimeout(t);
                count++;
                var Li = $(".Roas-chart").length-1;
                
                // if(count>5){
                //     count = 0;
                // }
                if(count>Li){
                    count = 0;
                }
                Getcom();
        }

        t = setTimeout(function(){
            Get();
        },3000);
        
});
$(function(){
    //倒计时
        var intDiff = parseInt(28800); //倒计时总秒数量
        function timer(intDiff) {
            setInterval(function () {
                var  day = 0,
                    hour = 0,
                    minute = 0,
                    second = 0; //时间默认值
                if (intDiff > 0) {
                    day = Math.floor(intDiff / (60 * 60 * 24)); 
                    hour = Math.floor(intDiff / ( 60 * 60)) - (day * 24);
                    minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                    second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                }
                    if (minute <= 9) minute = '0' + minute;
                    if (second <= 9) second = '0' + second;
                    if (hour <= 9) hour = '0' + hour;
                    // $('.day_show').html(day + "天");
                    $('.hour_show').html(  hour + '时');
                    $('.minute_show').html( minute + '分');
                    $('.second_show').html( second + '秒'); 
                    intDiff--;
            }, 1000);
        }
        timer(intDiff);  
    //最后的显示图片
        $(".list-box").on("mouseenter",function(){
            $(".list-img").finish().slideUp();
            $(this).children(".list-img").finish().slideDown();
        });
});
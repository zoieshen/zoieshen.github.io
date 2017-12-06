;$(function($){
//商品浏览记录
(function(){
    var ul = $(".hy-con-list");
    var li = $(".hy-con-item");
    var WIDTH = $(".hy-con-main").outerWidth(true);
    var length = li.length; 
    var liWidth = li.outerWidth(true);
    var count = 0;            
    ul.css({
        width:liWidth*length
    })
    if(length>5){
        $(".hy-clk-right").css({
            display:"block"
        })
    }
    $(".hy-clk-left").on("click",function(){
        count-=1;
        ul.animate({
            marginLeft:-WIDTH*count
        },1000,function(){
            count = count; 
        })
        if(count == 0){
            $(".hy-clk-left").css({
                display:"none"
            })
        }else{
            $(".hy-clk-right").css({
                display:"block"
            })
        } 
    })
    $(".hy-clk-right").on("click",function(){
        count+=1;
        ul.animate({
            marginLeft:-WIDTH*count
        },1000,function(){
            count = count;
        })
        if(count >= (length/5)-1){
            $(".hy-clk-right").css({
                display:"none"
            })
        }else{
            $(".hy-clk-left").css({
                display:"block"
            })
        }
    })
})
//结算框固定定位底部
(function(){ 
    $(window).on("scroll",function(){
    	var header = $(".header").outerHeight(true);
	    var main= $(".m-no").outerHeight(true);
	    var lbtm = $(".l-pay-bottom").outerHeight(true);  
        var winHeight = $(window).height();
        var scHeight = $(window).scrollTop();
        var sumHeight = header + main;
        var sumnew =sumHeight - winHeight;
        if(scHeight <= sumnew){
            $(".l-pay-bottom").addClass("fixed")
            $(".l-pay-top").css({
               marginBottom:lbtm
            })
        }else{
            $(".l-pay-bottom").removeClass("fixed")
            $(".l-pay-top").css({
               marginBottom:0
            })
        }
    })
}())
//计时器
;(function(){
    var ele_timer = $(".cart-time-main");
    var n_sec = 0;
    var n_min = 60;
    var t = null;
    t = setInterval(function () {
        var str_sec = n_sec;
        var str_min = n_min;
        if (n_sec < 10) {
            str_sec = "0" + n_sec;
        }
        if (n_min < 10) {
            str_min = "0" + n_min;
        }
        var time = str_min + "分" + str_sec + "秒";
        ele_timer.html(time);
        n_sec--;
        if (n_sec < 0) {
            n_sec = 59;
            n_min--;
        }
        if (n_sec + n_min == 0) {
            clearInterval(t);
            $(".cart-time span").html("已超时，请尽快结算");
        }
    }, 1000);
}())
//选中商品的各种操作
;(function(){
    var main = $(".main");
    var check = $('[type="checkbox"]');
    var count = parseInt($(".p-b-count").text());
    var psum=parseInt($(".p-b-sum").text());  
    var price = parseInt($(".l-price").text());
    var minus = $(".l-btn.minus");
    var plus = $(".l-btn.plus");
    if(psum <=79){
        $(".by-tips").html('还差<span class="need-more">79</span>元即可享受满79元包邮服务，<a class="cd-btn" href="javascript:void(0);">去凑单&gt;&gt;</a>')
    }else{
        $(".by-tips").html('本单免运费')   
    }     
    main.on("change",'[type="checkbox"]',function(){
        var x = parseInt($(this).parents(".list-item").find(".count.counts").val());
        var tdtotal = parseInt($(this).parents(".list-item").find(".td-total").text());
        var zcount = parseInt($(".p-b-count").text());
        var npsum=parseInt($(".p-b-sum").text());  
        if($(this)[0].checked){
            $(this).parents(".list-item").addClass("check");
            npsum+=tdtotal; 
            zcount+=x;            
        }else{
            $(this).parents(".list-item").removeClass("check") 
            npsum-=tdtotal;
            zcount-=x;                                     
        }
        if(npsum <=79){
            $(".by-tips").html('还差<span class="need-more">79</span>元即可享受满79元包邮服务，<a class="cd-btn" href="javascript:void(0);">去凑单&gt;&gt;</a>')
        }else{
            $(".by-tips").html('本单免运费')   
        } 
        $(".p-b-sum").text(npsum+".00");
        $(".p-b-count").html(zcount); 
    })
    main.on("click",".l-btn.minus",function(){
       psum=parseInt($(".p-b-sum").text());
       var zcount = parseInt($(".p-b-count").text());       
       var n = $(this).siblings(".count.counts").val();
       var price = parseInt($(this).parents(".list-item").find(".l-price").text());           
       if(n==1){
           n=1;
           return;
       }
       n--;
       zcount--;
       $(this).siblings(".count.counts").val(n);
       $(this).parents(".list-item").find(".td-total").text(n*price+".00");
       if($(this).parents(".list-item").find('[type="checkbox"]')[0].checked){
            if(psum-price <=79){
                $(".by-tips").html('还差<span class="need-more">79</span>元即可享受满79元包邮服务，<a class="cd-btn" href="javascript:void(0);">去凑单&gt;&gt;</a>')
            }else{
                $(".by-tips").html('本单免运费')   
            }
            $(".p-b-sum").text(psum-price+".00"); 
            $(".p-b-count").html(count);  
       }        
    })
    main.on("click",".l-btn.plus",function(){
        psum=parseInt($(".p-b-sum").text())
        var zcount = parseInt($(".p-b-count").text());          
        var n = $(this).siblings(".count.counts").val();
        var price = parseInt($(this).parents(".list-item").find(".l-price").text());    
        n++;
        zcount++;
        $(this).siblings(".count.counts").val(n)
        $(this).parents(".list-item").find(".td-total").text(n*price+".00");
        if($(this).parents(".list-item").find('[type="checkbox"]')[0].checked){
            if(psum+price <=79){
                $(".by-tips").html('还差<span class="need-more">79</span>元即可享受满79元包邮服务，<a class="cd-btn" href="javascript:void(0);">去凑单&gt;&gt;</a>')
            }else{
                $(".by-tips").html('本单免运费')   
            }
            $(".p-b-sum").text(psum+price+".00"); 
            $(".p-b-count").html(zcount); 
        }       
     })
    //提交订单
    var t =null;
    $(".pay-btn").on("click",function(){
        if(!$(".check").length){
            $(".sv-error").fadeIn(function(){
                t=setTimeout(function(){
                    $("#sv-error-close").click();
                },3000)
            });
        }
    })
    $("#sv-error-close").on("click",function(){
        clearTimeout(t)
        $(this).parents(".sv-error").fadeOut();
    })
    //点击删除
    $(".main").on("click",".l-del",function(){
        $(this).parents(".list-item").find(".del_tips").show().animate({
            opacity:1,
            top:65
        },300,function(){
            $(this).find(".ok_del").on("click",function(){
                var tcheck = $(this).parents(".list-item").find('[type="checkbox"]')[0]
                $(this).parents(".list-item").fadeOut(function(){
                    var ttotal = parseInt($(this).find(".td-total").text());
                    var sumpay = parseInt($(".p-b-sum").text());
                    var tcount = parseInt($(this).find(".counts").val());
                    var scount = parseInt($(".p-b-count").text());
                    if(tcheck.checked){
                    	console.log(this,sumpay,ttotal,scount,tcount)
                        $(".p-b-sum").text(sumpay-ttotal+".00"); 
                        $(".p-b-count").html(scount-tcount); 
                    }
                    $(this).remove();
                    if($(".list-item").length==1){
                        $(".m-list").html("");
                        $(".no-img").html('<a href="http://www.okhqb.com"></a>').css({
                            background:'url(./images/img-c/cart_null.jpg) no-repeat center center',
                            width: "470px",
                            height: "150px",
                            margin: "20px auto"
                        })
                    } 
                }) 
            })
            $(this).find(".can_del").on("click",function(){
                $(this).parents(".del_tips").animate({
                    top:100,
                    opacity:0
                },200,function(){
                    $(this).hide();
                })  
            })
        })
        
    })
    //判断购物车中是否有东西
    if(!$(".list-item")){
        $(".m-list").html("")
    }
    //点击加入购物车 添加到购物车
    $(".main").on("click",".sp-slider-buy",function(){
        var paynum = parseInt($(this).parents(".hy-con-item").find(".sp-slider-price span").text());
        var $html = `<div class="list-item item-con check">
        <div class="l-thd">
            <input type="checkbox" checked="">
            <a href="javascript:void(0);" class="l-thd-img"><img width="60" height="60" title="Makeblock Ultimate高级机器人套件 十合一智能遥控机器人玩具可编程拼装制作 智能机器人" src="./images/img-c/c70596b9abceb6d2ad2fe62c0e35270a.60.jpg"></a>
            <p class="img-info"><a href="javascript:void(0);">Makeblock Ultimate高级机器人套件 十合一智能遥控机器人玩具可编程拼装制作 智能机器人</a><span> 蓝色2.0升级版 </span></p>
        </div>
        <div class="l-thd">
            <p>
                <i class="iconfont icon-renminbi1688"></i><i class="l-price">${paynum}.00</i><br>
                <span class="tm-icon">特价</span>
            </p>
        </div>
        <div class="l-thd">
            <p>
                <span class="l-btn minus">―</span>
                <input type="text" value="1" name="" class="count counts" readonly="">
                <span class="l-btn plus">+</span>   
            </p>
            
        </div>
        <div class="l-thd">
            <p class="td-total-p"><i class="iconfont icon-renminbi1688"></i><span class="td-total">${paynum}.00</span></p>
        </div>
        <div class="l-thd">
            <a href="javascript:;" class="l-del"></a>
            <div class="del_tips">
                <p class="tips_arrow"><span class="tips_angle">◆</span><span class="tips_angle2">◆</span></p>
                <p class="del_warn">删掉的商品可能会被别人抢走哦~要删除吗？</p>
                <p class="cfix"><span class="ok_del">确定</span><span class="can_del">取消</span></p>
            </div>
        </div>
    </div>` ;
    $(".m-l-con").append($html);
    var nttl = parseInt($(this).parents(".hy-con-item").find(".sp-slider-price span").text());
    var npsum = parseInt($(".p-b-sum").text());
    var ncount = parseInt($(".p-b-count").text());
    $(".p-b-sum").text(npsum+nttl+".00"); 
    $(".p-b-count").html(++ncount);  
    })

}())
}(jQuery))



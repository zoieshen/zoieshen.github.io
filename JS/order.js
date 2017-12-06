;(function($){
    //地址边框更改
    $(".address-list").on("click","li",function(){
        $(this).siblings().removeClass("add-bg").end().addClass("add-bg")
    })
    //添加地址
    $(".add-address").on("click",function(){
        $(".address-select").fadeIn()
    })
    $(".address-new-close").on("click",function(){
        $(".address-select").fadeOut()        
    })
    $(".item-input input").on("blur",function(){
        if(!$(this).val().trim()){
            $(this).parents(".add-item").find(".error").fadeIn();            
        }else{
            var sMobile = $(".add-num input").val();
            var reg = /^1[3|4|5|8]\d{9}$/;
            if(!(sMobile.match(reg))){           
                $(this).parents(".add-item").find(".error").fadeIn();                        
            }else{
                $(this).parents(".add-item").find(".error").css({
                    display:"none"
                }); 
            }  
        }
    })
    //点击支付方式加样式
    $(".main").on("click",".pay-box",function(){
        $(this).siblings().removeClass("active").find(".pay-nav-con").css({
            display:"none"
        })
        $(this).addClass("active").find(".pay-nav-con").css({
            display:"block"
        })
    })
    $(".main").on("click",".pay-lable label",function(){
        $(".sec1-con").html($(this).clone(false))
    })
    //计时器
        var ele_timer = document.querySelector(".f-time-text"); 
        var ele_timerb = document.querySelector(".order-time-text");         
         
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
            var time = "商品库存有限，请在<i class='time-text'>"+str_min + "分" + str_sec+"</i>内提交订单";
            ele_timer.innerHTML = time;
            ele_timerb.innerHTML = time;            
            n_sec--;
            if (n_sec < 0) {
                n_sec = 59;
                n_min--;
            }
            if (n_sec + n_min == 0) {
                clearInterval(t)
            }
        }, 1000);
    //优惠码
    $(".couponIds").on("click",function(){
        $(".coup-list").fadeIn(16)
    })
    $(".coup-list").on("click","li",function(){
        $(".coup-btns").fadeIn(16)
    })
    //地址xuanze
    $(".add-mail").on("click",".item-input",function(){
        var index = $(this).index();
        var _this = this
        $(this).addClass("input-border").siblings().removeClass("input-border");
        $(".address-new-lists").fadeIn(16);
        $(".address-box").hide().eq(index - 2).show();
        $(".address-new-lists").on("click","span",function(){
            index++;
            var vspan = $(this).text();
            $(".input-border").find(".input-text").text(vspan);
            $(".input-border").next().addClass("input-border").siblings().removeClass("input-border");  
            $(".address-box").hide().eq(index - 2).show();  
            if(index==5){
                $(".address-new-lists").hide();
                $(".input-border").removeClass("input-border");              
            }
                  
        })
    })
    //计算价格
    var sum = 0
    $(".t-four span").each(function(i,v){ 
        // sum = (Number($(v).text())).toFixed(2)
        sum += Number($(v).text())
    })   
    sum = sum.toFixed(2)
    $(".order-totals").text(sum);
    $(".pay-fina").text(sum);
    $(".pay-total").text(sum);
    $(".order-btns-fenqi span i").text(sum);    
}(jQuery))
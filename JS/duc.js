(function(){
    //退出点击
        function getType(obj,type){
        obj.on("click",function(){
                $(this).parents(type).fadeOut(500)
            })
        }
        getType($(".feedback-error"), ".Opi-ack");
        getType($(".feedback-error2"), ".Opi-ack-orgin");

    //这是意见反馈
        $(".tail-fl-fk").on("click",function(){
            $(".Opi-ack").fadeIn();
        })
        //这是判断palceholder的
            function palceholdegfhr(ele){
                if(!('placeholder' in ele)){
                    ele.innerText = ele.getAttribute('placeholder');
                    ele.style.color = "#ccc";
                    ele.onfocus = function(){
                        if (this.innerText == ele.getAttribute('placeholder')){
                            this.innerText = "";
                            this.style.color = "#ccc";
                        }
                    }
                    ele.onblur = function(){
                        if (!this.innerText){
                            this.innerText = ele.getAttribute('placeholder');
                            this.style.color = "#ccc";
                        }
                    }
                }
            }
            palceholdegfhr(document.querySelector('textarea.shear-input'))
        //这是判断事件
        $(".input1").on("focus",function(){
            var yi = $(this);
            yi.attr('placeholder',"")
        })
        $(".input1").on("blur",function(){
            var yi = $(this);
            yi.attr('placeholder',"请输入您对我们网站有什么意见或建议，您的反馈将帮助我们更好的为您服务！")     
        })  
        $(".feedback-btn").on("click",function(){
            var input1 = $(".input1").val();
            var input2 = $(".input2").val();
            var inp = $(".input1").attr("placeholder");
            var isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
            if (!input1 || inp == input1){
                $(".Opi-ack-orgin").fadeIn().children(".Opinion-box-shear").css({
                    "width": "240px",
                    "top":"40%",
                    "left":"42%"
                }).end().find(".feedback-box-text").text("请填写您要反馈的信息!");
                $(".input1").val("");
            }else if (!input2){
                $(".Opi-ack-orgin").fadeIn().children(".Opinion-box-shear").css({
                    "width": "396px",
                    "top":"45%",
                    "left":"37%"
                }).end().find(".feedback-box-text").text("为了及时解决你反馈的意见或建议，请填写您的邮箱")
            }else if(!(isEmail.test(input2))){  
                $(".Opi-ack-orgin").fadeIn().children(".Opinion-box-shear").css({
                    "width": "396px",
                    "top":"45%",
                    "left":"37%"
                }).end().find(".feedback-box-text").text("邮箱格式填写错误，请填写您的正确邮箱格式")
            }else{
                $.ajax({
                    type: "GET",
                    url: url,
                    data: {"para":1},
                    cache: false,
                    async : false,
                    dataType: "json",
                    success: function (data ,textStatus, jqXHR){
                        $(".Opi-ack-orgin").fadeIn().children(".Opinion-box-shear").css({
                            "width": "396px",
                            "top": "45%",
                            "left": "37%"
                        }).end().find(".feedback-box-text").text("成功提交，感谢您宝贵的建议，希望你购物愉快！").css({
                            "background": 'url("images/commodityage/success.png") 10px 10px  no-repeat'
                        })
                        $(".Opi-ack").hide();
                        if("true"==data.flag){
                           alert("合法！");
                            return true;
                        }else{
                            alert("不合法！错误信息如下："+data.errorMsg);
                            return false;
                        }
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {      
                        alert("请求失败！");
                    }
                 });
            }
            var t;
            var fer = $(".Opi-ack-orgin");
            t = setTimeout(function(){
                if(fer.css("display") == "block"){
                    fer.fadeOut();             
                }
            },2000)  
            function getTyp(obj, type) {
                obj.on("click", function () {
                    clearTimeout(t);
                    $(this).parents(type).fadeOut(500)
                })
            }
            getTyp($(".feedback-error2"), ".Opi-ack-orgin");
            
        })
    /* 右侧登录窗口 */
        var fontcl = $(".font-cl");
        var userVal = $(".userName input");
        var passVal = $(".password input");
        function setVal() {
            fontcl.fadeOut(300)
            userVal.val("");
            passVal.val("");
        }
        $(".Headportrait_img1").hover(function () {
            $(".user-name-Head").fadeIn(300);
        }, function () {
            var t = $(".user-name-Head");
            t.fadeOut(300);
            if (!userVal.val() || !passVal.val()) {
                setVal()
            }
            t.hover(function () {
                $(this).finish().css("display", "block")
            }, function () {
                $(this).fadeOut(300);
                if (!userVal.val() || !passVal.val()) {
                    setVal()
                }
            })
        })
        function getFocBl(obj) {
            obj.on("focus", function () {
                $(this).val();
                fontcl.fadeOut(300);
            })
        }
        getFocBl(userVal)
        getFocBl(passVal)
        //验证右侧登录界面
        $(".personal-btn").on("click", function () {
            if (!userVal.val()) {
                console.log(userVal.val())
                fontcl.finish().fadeIn(300).text("请输入你的用户名");
            } else if (!passVal.val()) {
                fontcl.finish().fadeIn(300).text("请输入你的密码");
            } else {
                fontcl.finish().fadeIn(300).text("正在努力为你登陆...");
                // $.ajax({
                // })
            }
        })

    // 购物车car-con-box
        var flag = false;
        var time = 3600;
        var t;
        $(".mini-car").on("click", function () {
            var min, sec;
            $(".car-con-box").fadeToggle(200, function () {
                if (!flag) {
                    flag = true;
                    countTime(time);
                }
            })
            $(".nav-car-close").on("click", function () {
                $(".car-con-box").fadeOut();
            })
            function countTime(time) {
                t = setTimeout(function () {
                    time--;
                    min = Math.floor(time / 60);
                    sec = time % 60;
                    countTime(time);
                    if (time > 0) {
                        $(".nav-car-times").text("库存有限，保留" + formTime(min) + "分" + formTime(sec) + "秒");
                    } else if (time <= 0) {
                        clearTimeout(t);
                        $(".nav-car-times").text("保存时间已过期，请去购物车结算");
                    }
                }, 1000);
            }
            function formTime(num) {
                return num < 10 ? "0" + num : num;
            }
        })  
}());
(function(){
    //这是回到顶部
        function getDingbu(perate,obj) {
            $(window).on('scroll', function () {
                var top = $(this).scrollTop();
                if (top > 550) {
                    perate.css("display", "block");
                } else {
                    perate.css("display", "none");
                }
            })
            obj.on("click", function () {
                // $("html,body").animate({scrollTop:0},"fast");
                $("html,body").animate({ scrollTop: 0 }, 600);
            })
        }
        getDingbu($(".pel_ctr_ReturnTop"), $(".pel_ctr_ReturnTop"));
        getDingbu($(".personal_fixed-lf"), $(".icon-arrow-copy"));
    //刷新回到顶部
        $("body,html").animate({
            scrollTop:0
        },500)
   // 二级菜单
        function random(){
        return Math.floor(Math.random()*256);
        }
        $(".nav_type1").hover(function(){//这是移入商品分类
            $(".menu").fadeIn(function(){//让列表淡入
                $(".menu-content").on("mouseenter", ".sub_menu", function(e){//淡入完成之后再在判断移入
                    var color = "rgba("+random()+","+random()+","+random()+",.6)";
                    $(this).children(".ml1").addClass("menu_sale-list").css({
                    "backgroundColor":color,           
                    "opacity":1,
                    }).children(".sbu_menu_font").css({
                        "display":"block",
                    }).finish();
                })
            });
        },function(){
            $(".menu").css("display","none");
            $(".menu-content").on("mouseleave", ".sub_menu", function(e){
                var $_this = $(this);
                $_this.children(".menu_sale-list").css({
                    "opacity":0,
                }).end().children(".ml1").removeClass("menu_sale-list").children(".sbu_menu_font").css("display","none");
            })
            $(".menu").hover(function(){
                $(this).css("display","block");
            },function(){
                $(this).css("display","none");
            });
        })
}());

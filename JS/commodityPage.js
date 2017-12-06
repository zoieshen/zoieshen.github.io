(function(){
    /*  //关注的点击事件
        var follow = document.getElementById("follow");
        follow.onclick = function(){
            var _this = this;
            var i = _this.children[0];
            var a = _this.children[1];
            i.style.background = 'url("./images/commodityage/sprites1.png") -156px -63px  no-repeat';
            a.innerText = "已关注";
        }
        //退出点击
        var error = document.getElementById("error");
        error.onclick = function(){
            var _this = this;
            var f = _this.parentNode.parentNode.parentNode;
            // f.parentNode.removeChild(f);
        } 
    */
    //这事移入变换图片
        $(".list-img").on("mouseenter",".li-dig",function(){
            var index = $(this).index();
            $(".li-dig").css("border","1px solid #e1e1e1");
            $(this).css("border","2px solid #e10808")
            // $(this).css("border","2px solid #e10808").siblings().css("border", "1px solid #e1e1e1")
            if(index == 0){
                $(".view-img").css({
                "background": 'url("images/commodityage/dg1.png")',
                "transition":"background .5s"
                });
            }else{
                index++;
                $(".view-img").css({
                    "background": 'url("images/commodityage/dg' + index + '.jpg")',
                    "transition": "background .5s"
                });
            }
        })
    //关注的点击事件
        var t= null;
        $("#follow").on("click",function(){
            var _this = $(this);        
            var f =_this.attr("class");
            if(!f){
                _this.addClass("follow").find("a").text("已关注");
                $(".fo-box").fadeIn(500).find(".fo-fn").text("关注成功");
            }else{
                _this.removeClass("follow").find("a").text("关注");
                $(".fo-box").fadeIn(500).find(".fo-fn").text("取消关注");
            } 
            t = setTimeout(function(){
                $(".fo-box").fadeOut(500);
            },3000)
        })
    //退出点击
        function getType(obj,type){
        obj.on("click",function(){
                clearTimeout(t);
                $(this).parents(type).fadeOut(500)
            })
        }
        getType($("#error"),".fo-box");
        getType($("#error1"), ".ww-qr");
    //点击显示二维码
        $(".wi").on("click",function(){
            $(".ww-qr").fadeIn(500);
        })
}());
(function(){
    //这是点击的版本
        function get(d,m){
            d.on("click", ".font-list", function (e) {
                // $(this).siblings().removeClass("active3").end().addClass("active3");
                m.removeClass("active3")
                $(this).addClass("active3");
            })
        }
        get($(".optio-list2"), $(".optio-list2>.font-list"))
        get($(".optio-list1"), $(".optio-list1>.font-list"))
    //这是移入显示分期
        $(".bystages-img").hover(function(){
            $(".bystages").fadeIn();
        },function(){
            $(".bystages").fadeOut();
            $(".bystages").hover(function(){
                // $(this).css({
                //     "display":"block"
                // });
                $(this).finish().show(16);
            },function(){
                $(this).fadeOut();
            });
        })
    //降价提醒
        var NewPrice = $("[name = New-pric]")
        var NePphone = $("[name = New-phone]")
        var NewEmail = $("[name = New-email]")
        var ero = $(".price-error").eq(0);
        var ero1 = $(".price-error").eq(1);
        var ero2 = $(".price-error").eq(2);
        var trueimg = ero1.siblings(".true-img");
        var trueimg2 = ero2.siblings(".true-img");
        var numBer = Math.floor(+$(".num-ber").text());
        var number  = /^(0|[1-9][0-9]*)$/;
        var isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        //这会显示降价提示框
            $(".Price-link-a").on("click",function(){
            $(".dihangPrice").fadeIn(500);
            })
        //这是点击消失
            $(".dipe-error").on("click",function(){
                $(this).parents(".dihangPrice").fadeOut(300);
                if(!NewPrice.val() || (!(NewPrice.val().match(number))) || (+NewPrice.val() > numBer)){
                    NewPrice.val("");
                    ero.fadeOut(100);
                };
                if(!NePphone.val() || (!(NePphone.val().match(regExp)))){
                    trueimg.css('display',"none");
                    ero1.fadeOut(100);
                    NePphone.val("");
                };
                if(!NewEmail.val() || (!(NewEmail.val().match(isEmail)))){
                    trueimg2.css('display',"none");
                    ero2.fadeOut(100);
                    NewEmail.val("");
                }
            })
        //这是默认邮箱号
            var userVal = $(".userName input").val();
            if(isEmail.test(userVal)){
                NewEmail.val(userVal);
            }
        //这是判断价格
            NewPrice.on("focus",function(){
                if(!NewPrice.val() || (!(NewPrice.val().match(number))) || (+NewPrice.val() > numBer)){
                    $(this).val("");
                    ero.fadeOut(300);
                }
            })
        //判断手机号
                NePphone.on("focus",function(){
                    if(!NePphone.val() || (!(NePphone.val().match(regExp)))){
                        trueimg.css('display',"none");
                        ero1.fadeOut(300);
                        $(this).val("");
                    }
                })
                NePphone.on("blur",function(){
                    if(NePphone.val() && (NePphone.val().match(regExp))){
                        trueimg.css('display',"inline-block");            
                    }
                })
        //判断邮箱
            NewEmail.on("focus",function(){
                if(!NewEmail.val() || (!(NewEmail.val().match(isEmail)))){
                    trueimg2.css('display',"none");
                    ero2.fadeOut(300);
                    $(this).val("");
                }
            })
            NewEmail.on("blur",function(){
                if(NewEmail.val() && (NewEmail.val().match(isEmail))){
                    trueimg2.css('display',"inline-block");            
                }
            })
        $(".dipe-btn").on("click",function(){
            // console.log(NewPrice,NePphone,NewEmail)
            if(!NewPrice.val()){
                ero.fadeIn(300).children().text("请填写提醒价格!");
            }else if(!(NewPrice.val().match(number))){
                ero.fadeIn(300).children().text("价格只能为数字");  
            }else if(+NewPrice.val() > numBer){
                ero.fadeIn(300).children().text("情输入小于现价的提醒价");
            }else if(!NePphone.val()){
                ero1.fadeIn(300).children().text("请填写您的手机号码！");
                trueimg.css('display',"none");      
            }else if(!(NePphone.val().match(regExp))){
                ero1.fadeIn(300).children().text("手机格式不正确");
                trueimg.css('display',"none");
            }else if(!NewEmail.val()){
                ero2.fadeIn(300);
                trueimg2.css('display',"none");
            }else if(!(NewEmail.val().match(isEmail))){
                ero2.fadeIn(300);
                trueimg2.css('display',"none");
            }else{
                // $.ajax({

                // })
                // NewPrice.val("")
                // NePphone.val("")
                // NewEmail.val("")
            }
        })
}());
(function () {
    //这是信息的ted 切换
        $(".nav-ted").on("click",".nav-type",function(e){
            var index = $(this).index();
            $(this).attr('class', "nav-type teb-active").siblings().attr('class', 'nav-type');
            $(".pky-m-list").eq(index).finish().fadeIn(500).siblings().hide();
        })
    //这事商家介绍
        var timer;
        var t = 1;
        $(".det-list-lf").on("mouseenter", ".det-l-a", function (e) {
            e.stopPropagation()
            // clearTimeout(timer)
            var index = $(this).index();
            $(".det-l-a").css({
                background: "#494949",
                borderRadius: "0px"
            });
            $(this).css({
                background: "#e10808",
                transition: " background 0.5s",
                borderRadius: "3px"
            })
            $(".det-list-lr img").removeClass("det-db").hide().eq(index).finish().fadeIn(300);
        })

        var m = $(".det-list-lf .det-l-a").length;  
        function getMouse(){
            timer = setInterval(function () {
                $(".det-list-lf .det-l-a").eq(t).mouseenter();
                t++;
                if (t == m) {
                    t = 0;
                }
            }, 2000)
        }
        getMouse()

        $(".det-list-box").hover(function(){
            clearInterval(timer);
        },function(){
            setTimeout(getMouse(),1000)
        })
        
        
    //定位点击事件
        //这是定位
        var bh = $(".body-height").height();
        var bn = $(".body-con").height()
        var cn = $(".con-top").height();
        var cb = $(".con-btm-ted").height();
        var hei = bh + bn + cn + cb;
        //这是楼层
        var de1 = $(".det-list-ted").eq(0).outerHeight(true);
        var de2 = $(".det-list-ted").eq(1).outerHeight(true);
        var de3 = $(".det-list-ted").eq(2).outerHeight(true);
        var de4 = $(".det-list-ted").eq(3).outerHeight(true);
        //这是求和
        var dehe1 = hei + de1;
        var dehe2 = dehe1 + de2;
        var dehe3 = dehe2 + de3;
        var dehe4 = dehe3 + de4;
        //判断
        $(window).on("scroll",function(){
            var _this = $(this).scrollTop();
            if(_this > hei){
                $(".det-ted").addClass("position");
                $(".det-ted1").addClass("share");
                $(".det-list-box").addClass("mt");
            }else{
                $(".det-ted").removeClass("position");
                $(".det-list-box").removeClass("mt");
                $(".det-ted1").removeClass("share");
            }
            if (_this > hei && _this <= dehe1) {
                $(".det-type").removeClass("det-type-i1").eq(0).addClass("det-type-i1");
            };
            if (_this > dehe1 && _this <= dehe2) {
                $(".det-type").removeClass("det-type-i1").eq(1).addClass("det-type-i1");
            };
            if (_this > dehe2 && _this <= dehe3) {
                $(".det-type").removeClass("det-type-i1").eq(2).addClass("det-type-i1");
            };
            if (_this > dehe3 && _this <= dehe4) {
                $(".det-type").removeClass("det-type-i1").eq(3).addClass("det-type-i1");
            };
        })
        //锚点点击事件(这是很重要的)
        var $ou = $("body,html");
        $(".det-type").on("click",function(){
            var dy = $($.attr(this, 'href')).offset().top;
            $ou.animate({//给获取的元素添加动画效果
                scrollTop: dy - 45//让他的高度等于他自己的
            }, 600);
            return false;
        })

}())

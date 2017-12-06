;$(function($){
    // 意见反馈框
    $(".f-list-btn").on("click",function(){
        $(".service").fadeIn().css("display","block");
    })
    $("#sv-close").on("click",function(){
        $(this).parents(".service").fadeOut(function(){
            $(this).css("display","none")
        })
    })
    var t = null;
    var svText = $(".sv-text").val(); 
    $(".sv-text").on("focus",function(){
        var svText = $(".sv-text").val();    
        if(svText==="请输入您对我们网站有什么意见或建议，您的反馈将帮助我们更好的为您服务！"){
            $(this).addClass("svtxt").val("");        
        }
        $(".sv-text").on("blur",function(){
            var svText = $(".sv-text").val();
            if(!$.trim(svText)){
                $(".sv-text").val("请输入您对我们网站有什么意见或建议，您的反馈将帮助我们更好的为您服务！");
            }     
        })
    })    
    
    $("#sv-btn").on("click",function(){      
        $("#sv-error-close").on("click",function(){
            clearTimeout(t)
            $(this).parents(".sv-error").fadeOut(function(){
                $(this).css("display","none");
                $(".sv-error-con").text("").parents(".sv-error-main").css({
                    width:240,
                    marginLeft:-120
                })           
            })
        })
        var svText = $(".sv-text").val(); 
        var svEmail = $(".sv-email").val();
        if(!$.trim(svText)  || svText=="请输入您对我们网站有什么意见或建议，您的反馈将帮助我们更好的为您服务！"){          
            $(".sv-error").fadeIn(function(){
                $(this).css("display","block")
                t = setTimeout(function(){
                    $("#sv-error-close").click();
                },3000)
            })
            $(".sv-error-con").text("请输入需要填写的意见")
            return false;
        }
        if(!$.trim(svEmail)){           
            $(".sv-error").find(".sv-error-main").css({
                width:380,
                marginLeft:-190
            }).end().fadeIn(function(){
                $(this).css("display","block")
                t = setTimeout(function(){
                    $("#sv-error-close").click();
                },3000)
            })
            $(".sv-error-con").text("为了及时解决您反馈的意见或建议，请填写您的邮箱！");
            return false;            
        }
        var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;//邮箱
        var emresult = svEmail.match(reg);
        if(!emresult){
            $(".sv-error").find(".sv-error-main").css({
                width:330,
                marginLeft:-165
            }).end().fadeIn(function(){
                $(this).css("display","block")
                t = setTimeout(function(){
                    $("#sv-error-close").click();
                },3000)
            })
            $(".sv-error-con").text("邮箱格式填写错误，请填写您的正确邮箱！");
            return false;
        }
    })
}(jQuery))
$('.current-subnav').hover(function () {
    $('.subnav-list').finish().fadeIn(function () {
        $('.subnav-list').css("display", "block")
    })
}, function () {
    $('.subnav-list').finish().fadeOut(function () {
        $('.subnav-list').css("display", "none");
    })
    $('.subnav-list').hover(function () {
        $('.subnav-list').finish().fadeIn(function () {
            $('.subnav-list').css("display", "block")
        })
    }, function () {
        $('.subnav-list').finish().fadeOut(function () {
            $('.subnav-list').css("display", "none");
        })
    })

})
   // 意见反馈
   $('.ad').on('click', function () {
    $('.advice').fadeIn(1000, function () {
        $('.advice-center').fadeIn(200, function () {
            $(this).parent().css("backgroundColor", "rgba(0, 0, 0, 0.5)");

        });

    })
})
$('.close').on('click', function () {
    $(this).parents('.advice-center').fadeOut(500, function () {
        $(this).parent().css("backgroundColor", "rgba(0, 0, 0, 0.1)").fadeOut(500);

    })
})

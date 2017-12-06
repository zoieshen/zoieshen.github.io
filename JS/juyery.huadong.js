
function getDingbu(perate,obj){
    $(window).on('scroll',function(){
        var top = $(this).scrollTop();
        if(top>190){
            perate.css("display","block");
        }else{
            perate.css("display","none");
        }
    })
    perate.on("click",function(){
        // $("html,body").animate({scrollTop:0},"fast");
        $("html,body").animate({scrollTop:0},500);
    }) 
}
getDingbu($(".haudong"),$(".haudong"));

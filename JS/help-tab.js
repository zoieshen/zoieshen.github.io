// ;(function(){
//     var list = document.getElementsByClassName("help-content-list");
//     var menu_list = document.getElementsByClassName("help-menu")[0];
//     var item = menu_list.getElementsByTagName("a");
//     console.log(item,item.length,list);
//     for (var i = 0; i < item.length; i++) {
//         item[i].index = i;
//     }
//     menu_list.onclick = function (e) {
//         var e = e || window.event;
//         var target = e.target || e.srcElement;
//         if (target.nodeName == "A") {
//             console.log(target.innerText);
//             for (var j = 0; j < item.length; j++) {
//                 if (item[j].className == "active") {
//                     item[j].className = "";
//                     list[j].className = "help-content-list";
//                 }
//             }
//             target.className = "active";
//             list[target.index].className = "active help-content-list";
//             console.log(target.index);
//         }
//     }
// }());
(function($){
    $(".help-menu-list").on("click","li",function(){
        // var $Num = $(this).parents(".help-menu").children(".help-menu-list");
        var $num = $(this).parents(".help-menu-list").index();
        var $sum = 0;
        for(var i = 0 ;i<$num;i++){
           $sum +=  $(".help-menu-list").eq(i).find("a").length;
        }
        // console.log($sum,$num,$(this).index())
        // console.log($(".help-menu-list").eq($num).find("a"), $(".help-menu-list a").removeClass("active").end().parents(".help-menu-list"))
        $(".help-menu-list a").removeClass("active").parents(".help-menu-list").find("a").eq($(this).index() + $sum).addClass("active");
        $(".help-content-list").removeClass("active").eq($(this).index()+$sum).addClass("active");
    })
    $(".bottom-box-center a").on("click",function(){
        var data = $(this).data("a");
        $(".help-menu").find("a").filter("." + data).parent().click();
        // 关于页面的跳转，用临时数据，获取要跳转到的位置元素的对应类名属性，加点击时间直接.click()即可
    })
}(jQuery));
(function($){
    $(".okhqb_feed").on("click", function () {
        $(".mask").fadeIn(200, function () {
            $("#adjust").focus(function () {
                $(this).css({
                    "color": "#444"
                }).val("");
            });
            $("#email").focus(function () {
                $(this).css("color", "#444");
            });
        });
        $(".mask #close").on("click", function () {
            $(".mask").fadeOut(200);
        })
    })
}(jQuery))

;(function($){
    $("img").addClass("lazy");
    // $( 'img' ).attr('src').replaceWith( 'data-original' );
        $('.lazy').lazyload({
            effect: "fadeIn", //出现的效果 fadeIn   show   slideDown
            placeholder:"./images/img/loading.gif",//提前占位 图片地址
            // threshold: 200, //提前加载，滚动距离
            // event:'mouseover',//如果有该属性，那么提前加载将失效 需要条件出发，参数值为事件名
            // container:$("div"), //浏览器的滚动条会影响到某些元素内部的图片的懒加载，使用这样的属性可以解决
            failure_limit : 10000 //图片混排 同时加载更多的图片避免出现当前屏幕上图片不能加载出来的问题
        });
        // 如果你的图
}(jQuery))
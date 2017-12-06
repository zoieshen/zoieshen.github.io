// 分页
$(document).ready(function () {
    Pager(6);
});
//分页函数,参数PAGESIZE是每页显示的数量
function Pager(pageSize) {
    var total = $(".about-tiao").children('.about-vb').length; //图片的个数
    var startIndex = 1; //首页的下标（因为页数是第一页开始）
    var endIndex = total; //尾页的下标
    var pageCount = 0//初始化页数，并在显示处省略首页和尾页
        pageCount = Math.ceil(endIndex / pageSize); //计算页数，采用上取法，
    var mid_Pages = ""; //第二页，第三页，第四页。。。。。
// }

    //如果页数大于等于2，则分页
 if (pageCount >= 2) {
        //默认显示第一页内容
           selectedPage(1, total, pageSize);        
        for (var i = 1; i <= pageCount; i++) {
            if (i == 1) {
                mid_Pages += "<span><a href='#' class='cur-f' onclick=\"selectedPage(1," + total + "," + pageSize + ")\">1</a></span>&nbsp;";
            }
            else if (i == pageCount) {
                mid_Pages += "<span><a href='#' onclick=\"selectedPage(" + pageCount + "," + total + "," + pageSize + ")\">" + pageCount + "</a></span>&nbsp;";
            }
            else {
                mid_Pages += "<span><a href='#' onclick=\"selectedPage(" + i + "," + total + "," + pageSize + ")\">" + i + "</a></span>&nbsp;";
            }
        }
        
    }

    var children = $(".about-tiao").children(0);
    $(".page").html(mid_Pages); //显示第二页，第三页，第四页。。。。。
    $('.page').on('click', 'a', function () {
        $('.page a').removeClass('cur-f');
        $(this).addClass('cur-f');
    })
}    
 
//选择了某一页，只显示某一页的内容，其他页的内容被隐藏
function selectedPage(index, total, pageSize) {
    $(".about-tiao").children('.about-vb').css("display", "none");
    $(".about-tiao").children('.about-vb').slice((index - 1) * pageSize, (index - 1) * pageSize + pageSize).css("display", "block");

} 

//tab切换
$('.tab-list').on('click','li',function(){
    $('.tab-list li').removeClass('active-red').eq($(this).index()).addClass('active-red');
    $('.box-nav .about-content-right').removeClass('about-block').eq($(this).index()).addClass('about-block');
})

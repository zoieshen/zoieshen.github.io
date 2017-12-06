$(function(){
    /* 初始化第一个img的状态 */
    $('.banner-img:first').css('display','block').addClass('banner-active');


    /*  生成指示器*/
    $('.banner-img').each(function(index){
        $li = index==0?'<li class="current"></li>':'<li></li>';
        console.log(index);
        $('.dot').append($li);
    })

    var count = 0;
    var t = null;
    $('.next').on('click',a = function(){
        clearTimeout(t);
        var _this = this;
        $('.next').off('click');
        // $(this).off('click');
        count++;
        if(count>3){
            count = 0;
        }
        $('.body-banner .dot li').removeClass('current').eq(count).addClass('current');
        $('.body-banner .banner-ul .banner-img').hide().filter('.banner-active').show().removeClass('banner-active').end().eq(count).addClass('banner-active').fadeIn(function(){
            $(_this).on('click',a);
            t = setTimeout(function(){
                $(_this).click();
            },1000)
        });
    })
    $('.prev').on('click',function(){
        clearTimeout(t);
        count--;
        if(count<0){
            count = 3;
        }
        $('.body-banner .banner-ul .banner-img').hide().filter('.banner-active').show().removeClass('banner-active').end().eq(count).addClass('banner-active').fadeIn(function(){
            t = setTimeout(function(){
                    $(".prev").click();
                },1000)
            });
        })
        //给指示器绑定事件
        $('.body-banner .dot li').on('click',function(){
			clearTimeout(t);
			var index = $(this).index();
			count = index;
			$('.body-banner .dot li').removeClass('current').eq(count).addClass('current')
			$('.body-banner .banner-img').hide().filter('.banner-active').show().removeClass('banner-active').end().eq(count).addClass('banner-active').fadeIn(function(){
				// $(_this).prop('disabled',false);
				// $(_this).on('click',a);
				t = setTimeout(function(){
					$('.next').click();
				},1000)
			});
		})


		t = setTimeout(function(){
			$('.next').click()
		},1000)
    })
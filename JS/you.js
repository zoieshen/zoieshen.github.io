;
$(function($){
	//刷新回顶部
	$("body,html").animate({
		"scrollTop": 0
	},500)
	// 关闭调整框
	$(".tz-close").on("click", function () {
		$(this).parents(".c-tz").css({
			"display": "none"
		})
	})
	//右侧栏购物车
	var flag = false;
	var time = 3600;
	var t;
	var time_con =$(".cart-times")
	$("#car-item").on("click", function () {
		var min, sec;		
		if (!flag) {
			flag = true;
			countTime(time);
		}
		function countTime(time) {
			t = setTimeout(function () {
				console.log(time)
				time--;
				min = Math.floor(time / 60);
				sec = time % 60;
				countTime(time);
				if (time > 0) {
					time_con.text("库存有限，保留" + formTime(min) + "分" + formTime(sec) + "秒");
				} else if (time <= 0) {
					clearTimeout(t);
					time_con.text("保存时间已过期，请去购物车结算");
				}
			}, 1000);
		}
		function formTime(num) {
			return num < 10 ? "0" + num : num;
		};
		$(".rt-bar .cart-con-box").animate({
			right: "36px"
		}, 32)
	})
	$(".cart-con-box .nav-car-close").on("click", function () {
		$(this).parents(".cart-con-box").animate({
			right: "-300px"
		}, 32)
	})
	//返回顶部
	$(window).on("scroll", function () {
		var scrolltop = $(this).scrollTop();
		if (scrolltop >= 198) {
			$("#scrolltop").css({
				display: "block"
			})
		} else {
			$("#scrolltop").css({
				display: "none"
			})
		}
	})
	$("#scrolltop").on("click",function () {
		$("body,html").animate({
			"scrollTop": 0
		},500)
	})
	// 楼层
	$(window).on("scroll", function () {
		var hst = $(".header").outerHeight(true);
		var mtop = $(".m-top").outerHeight(true);
		var mnav = $(".m-nav").outerHeight(true);
		var mmd = $("#m-md").outerHeight(true);
		var mzp = $("#m-zp").outerHeight(true);
		var mth = $("#m-th").outerHeight(true);
		var mbx = $("#m-bx").outerHeight(true);
		var mjp = $("#m-jp").outerHeight(true);
		var sum0 = hst + mtop + mnav - 220;
		var sum1 = sum0 + mmd + mzp;
		var sum2 = sum1 + mth;
		var sum3 = sum2 + mbx;
		var sum4 = sum3 + mjp;
		var stp = $(this).scrollTop();
		if (stp >= hst + mtop) {
			$(".m-nav").addClass("m-navpt").next().css({
				marginTop: 110
			})
		} else if (stp <= hst + mtop + mnav) {
			$(".m-nav").removeClass("m-navpt").next().css({
				marginTop: 0
			})
		}
		if (stp < sum1) {
			$(".main .m-nav .m-nav-menu>a:nth-child(1)").css({
				background: "url('./images/img-y/nav_on_new_v2.png') 0 50% no-repeat"
			})
		} else {
			$(".main .m-nav .m-nav-menu>a:nth-child(1)").css({
				background: "url('./images/img-y/nav_out_new_v2.jpg') 0 50% no-repeat"
			})
		}
		if (stp >= sum1 && stp < sum2) {
			$(".m-th-con img.img-lf").animate({
				left: 0
			}, 500)
			$(".m-th-con img.img-rg").animate({
				right: 0
			}, 500)
			$(".main .m-nav .m-nav-menu>a:nth-child(2)").css({
				background: "url('./images/img-y/nav_on_new_v2.png') 25% 50% no-repeat"
			})
		} else {
			$(".main .m-nav .m-nav-menu>a:nth-child(2)").css({
				background: "url('./images/img-y/nav_out_new_v2.jpg') 25% 50% no-repeat"
			})
		}
		if (stp >= sum2 && stp < sum3) {
			$(".bx-bm-con .con-img").animate({
				opacity: "1"
			}, 500)
			$(".main .m-nav .m-nav-menu>a:nth-child(3)").css({
				background: "url('./images/img-y/nav_on_new_v2.png') 50% 50% no-repeat"
			})
		} else {
			$(".main .m-nav .m-nav-menu>a:nth-child(3)").css({
				background: "url('./images/img-y/nav_out_new_v2.jpg') 50% 50% no-repeat"
			})
		}
		if (stp >= sum3 && stp < sum4) {
			$(".jp-con div:nth-child(1)").animate({
				right: "30px"
			}, 500)
			$(".jp-con div:nth-child(2)").animate({
				left: "10px"
			}, 500)

			$(".jp-con div:nth-child(3)").animate({
				left: "160px"
			}, 500)
			$(".jp-con div:nth-child(4)").animate({
				left: "800px"
			}, 500)
			$(".main .m-nav .m-nav-menu>a:nth-child(4)").css({
				background: "url('./images/img-y/nav_on_new_v2.png') 75% 50% no-repeat"
			})
		} else {
			$(".main .m-nav .m-nav-menu>a:nth-child(4)").css({
				background: "url('./images/img-y/nav_out_new_v2.jpg') 75% 50% no-repeat"
			})
		}
		if (stp >= sum4) {
			$(".yj-con .yj-lf").animate({
				left: 0
			}, 500)
			$(".yj-con .yj-rg").animate({
				right: 0
			}, 500)
			$(".m-yj .yj-one .one-con .one-img:nth-child(1)").animate({
				left: 0
			}, 500)
			$(".m-yj .yj-one .one-con .one-img:nth-child(3)").animate({
				left: "-400px"
			}, 500)
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(2)").animate({
				right: "80px"
			})
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(3)").animate({
				right: "30px"
			})
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(4)").animate({
				right: "80px"
			})
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(5)").animate({
				right: "30px"
			})
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(6)").animate({
				left: "50px"
			})
			$(".main .m-nav .m-nav-menu>a:nth-child(5)").css({
				background: "url('./images/img-y/nav_on_new_v2.png') 100% 50% no-repeat"
			})
		} else {
			$(".main .m-nav .m-nav-menu>a:nth-child(5)").css({
				background: "url('./images/img-y/nav_out_new_v2.jpg') 100% 50% no-repeat"
			})
		}
	})
// 楼层加载动效
	$(".m-nav-menu a").on("click", function (e) {
		var tg = e.target;
		var th = $(tg).attr("href");
		if (th == "#m-th") {
			$(".m-th-con img.img-lf").animate({
				left: 0
			}, 500)
			$(".m-th-con img.img-rg").animate({
				right: 0
			}, 500)
		} else if (th == "#m-bx") {
			$(".bx-bm-con .con-img").animate({
				opacity: "1"
			}, 500)
		} else if (th == "#m-jp") {
			$(".jp-con div:nth-child(1)").animate({
				right: "30px"
			}, 500)
			$(".jp-con div:nth-child(2)").animate({
				left: "10px"
			}, 500)

			$(".jp-con div:nth-child(3)").animate({
				left: "160px"
			}, 500)
			$(".jp-con div:nth-child(4)").animate({
				left: "800px"
			}, 500)
		} else if (th == "#m-yj") {
			$(".yj-con .yj-lf").animate({
				left: 0
			}, 500)
			$(".yj-con .yj-rg").animate({
				right: 0
			}, 500)
			$(".m-yj .yj-one .one-con .one-img:nth-child(1)").animate({
				left: 0
			}, 500)
			$(".m-yj .yj-one .one-con .one-img:nth-child(3)").animate({
				left: "-400px"
			}, 500)
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(2)").animate({
				right: "80px"
			})
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(3)").animate({
				right: "30px"
			})
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(4)").animate({
				right: "80px"
			})
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(5)").animate({
				right: "30px"
			})
			$(".m-yj .yj-kb .kb-con .kb-img:nth-child(6)").animate({
				left: "50px"
			})
		}
	})
	//懒加载
	$("img").addClass('lazy');
	$(".lazy").lazyload({
		placeholder: "./images/img-y/okhqb-loading.gif",
		threshold: 200,
		failure_limit: 1000
	});
}(jQuery))
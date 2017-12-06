;(function($){
	$(function(){
		// feedback
		$(".okhqb_feed").on("click",function(){
			$(".mask").fadeIn(200, function() {
				$("#adjust").focus(function() {
					$(this).css({
						"color":"#444"
					}).val("");
				});
				$("#email").focus(function() {
					$(this).css("color","#444");
				});
			});
			$(".mask #close").on("click",function(){
				$(".mask").fadeOut(200);
			})
		})
		
		/* 右边登录窗口 */
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
			console.log(546)
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
	})
}(jQuery));
(function($){
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
				console.log(time)
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
}(jQuery));
(function () {
	var TIME = 2000;
	var ul = document.getElementsByClassName("slide")[0].getElementsByTagName("ul")[0];
	var li = ul.children;
	// 克隆子节点
	var cli = li[0].cloneNode(true);
	ul.appendChild(cli);
	var LI_WIDTH = parseInt(getStyle(li[0]).width);
	var LI_LENGTH = li.length;
	// js动态生成指示器
	var dot = document.getElementsByClassName("dot")[0];
	var fr = document.createDocumentFragment();
	for (var i = 0; i < LI_LENGTH - 1; i++) {
		var li = document.createElement("li");
		li.index = i;
		li.className = i == 0 ? "active" : "";
		fr.appendChild(li);
	}
	dot.appendChild(fr);
	// 重新设置ul的宽度
	ul.style.width = LI_LENGTH * LI_WIDTH + "px";
	var count = 0;
	var t = 0;
	// 点击指示器改变图片显示内容
	dot.onclick = function () {
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if (target.nodeName == "LI" && target.className == "") {
			var count = target.index;
			animate(ul, -count * LI_WIDTH);
			changeDot(count);
		}
	}
	function changeDot(index) {
		var dots = dot.children;
		for (var i = 0; i < dots.length; i++) {
			if (dots[i].className == "active") {
				dots[i].className = "";
			}
		}
		if (index == LI_LENGTH - 1) {
			dots[0].className = "active";
		} else {
			dots[index].className = "active";
		}
	}
	var next = document.getElementById("next");
	var prev = document.getElementById("prev");
	next.onclick = function () {
		var _this = this;
		clearTimeout(this.t);
		if (count == LI_LENGTH - 1) {
			count = 0;
			ul.style.left = 0;
		}
		count++;
		animate(ul, -count * LI_WIDTH, function () {
			_this.t = setTimeout(function () {
				next.click();
			}, TIME)
		});
		changeDot(count);
	}
	prev.onclick = function () {
		clearTimeout(prev.t);
		if (count == 0) {
			count = LI_LENGTH - 1;
			ul.style.left = -count * LI_WIDTH + "px";
		}
		count--;
		animate(ul, -count * LI_WIDTH, function () {
			setTimeout(function () {
				prev.click();
			}, TIME);
		});
		changeDot(count);
	}
	function animate(obj, target, callback) {
		clearInterval(obj.t);
		obj.t = setInterval(function () {
			var left = parseInt(getStyle(obj).left);
			var step = Math.ceil((target - left) / 10);
			if (Math.abs(step) <= 1) {
				obj.style.left = target + "px";
				clearInterval(obj.t);
				if (callback) {
					callback();
				}
			} else {
				obj.style.left = left + step + "px";
			}
		}, 16)
	}
	next.t = setTimeout(function () {
		next.click();
	}, TIME)
	function getStyle(obj) {
		return getComputedStyle ? getComputedStyle(obj, null) : obj.currentStyle;
	}
}());
(function(){
	$(function () {
		var $up = $(".content1").offset().top;
		var $f0 = $(".content2").offset().top;
		var $f1 = $(".content3").offset().top;
		var $f2 = $(".content4").offset().top;
		var $right = $(".new-menu").offset().top;
		$(window).scroll(function () {
			if ($(this).scrollTop() >= $right) {
				$(".scrollTop").css("display", "block");
			} else {
				$(".scrollTop").css("display", "none");
			}
			if ($(this).scrollTop() >= $up) {
				$(".ok-nav").css({
					"display": "block"
				})
				$(".ok-nav a").removeClass('active').eq(0).addClass('active');
				if ($(this).scrollTop() >= $f0) {
					$(".ok-nav a").removeClass('active').eq(1).addClass('active');
				}
				if ($(this).scrollTop() >= $f1) {
					$(".ok-nav a").removeClass('active').eq(2).addClass('active');
				}
				if ($(this).scrollTop() >= $f2) {
					$(".ok-nav a").removeClass('active').eq(3).addClass('active');
				}
			} else {
				$(".ok-nav").css({
					"display": "none"
				})
			}
		})
		var h;
		$(".ok-nav").on("click", ".item", function () {
			var index = $(this).index();
			if (index == 0) {
				h = $up;
			} else if (index == 1) {
				h = $f0;
			} else if (index == 2) {
				h = $f1;
			} else if (index == 3) {
				h = $f2;
			}
			$(this).removeClass('active').eq(index).addClass('active');
			$("html,body").animate({ "scrollTop": h }, 500);
		})
	})
}(jQuery));
(function($){
	$(".lazy").lazyload({
		"placeholder": "./images/overseas/okhqb-loading.gif",
		"effect": "fadeIn",
		"failure_limit": 3000
	})
}(jQuery));
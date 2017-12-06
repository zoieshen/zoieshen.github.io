;
(function () {
    var TIME = 2000;
    var ul = document.querySelector('.lb');
    var li = ul.children;
    //克隆节点
    var Cli = li[0].cloneNode(true);
    ul.appendChild(Cli);
    var LI_WIDTH = parseInt(getStyle(li[0]).width);
    var LI_LENGTH = li.length;

    var dot = document.querySelector('.dot');
    var fr = document.createDocumentFragment();
    for (var i = 0; i < LI_LENGTH - 1; i++) {
        var li = document.createElement('li');
        li.index = i;
        /*if(i == 0){
            li.className = "active";
        }*/

        li.className = i == 0 ? "active" : "";
        fr.appendChild(li);
    }
    dot.appendChild(fr);
    //点击指示器改变图片内容
    dot.onclick = function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI" && target.className == "") {
            count = target.index;
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

    var count = 0;
    //js设置ul的宽度 li的宽度 * li的数量
    ul.style.width = LI_WIDTH * LI_LENGTH + "px";



    //ul的left值计算公式  - 下标 * 宽度 + "px"

    //给下一页按钮添加事件
    var next = document.querySelector('.nextSlide');
    next.onclick = function () {
        var _this = this;
        clearTimeout(this.t);
        /*
            第一张图是 0          0*1200
            第二张图是 -1200      -1*1200
            第三张图是 -2400      -2*1200
            第四张     -3600      -3*1200
               五       -4800      -4*1200
         */
        // 判断count值是否在最后一页 length-1
        if (count == LI_LENGTH - 1) {
            //如果条件成立，说明在最后一页
            count = 0;

            //立刻跳到第一页
            // ul.style.left = -count * LI_WIDTH + "px";
            ul.style.left = 0;
        }
        count++;
        // ul.style.left = -count * LI_WIDTH + "px";
        animate(ul, -count * LI_WIDTH, function () {
            _this.t = setTimeout(function () {
                next.click();
            }, TIME)
        });
        /*var dots = dot.children;
        for(var i = 0;i<dots.length;i++){
            if(dots[i].className == "active"){
                dots[i].className = "";
            }
        }
        dots[count].className = "active";*/
        changeDot(count);

    }

    //给上一页按钮添加事件
    var prev = document.querySelector('.prevSlide');
    prev.onclick = function () {
        clearTimeout(next.t);
        if (count == 0) {
            count = LI_LENGTH - 1;
            ul.style.left = -count * LI_WIDTH + "px";
        }
        count--;
        animate(ul, -count * LI_WIDTH, function () {
            next.t = setTimeout(function () {
                prev.click();
            }, TIME)
        });

        /*var dots = dot.children;
        for(var i = 0;i<dots.length;i++){
            if(dots[i].className == "active"){
                dots[i].className = "";
            }
        }
        dots[count].className = "active";*/
        changeDot(count);
    }




    function getStyle(obj) {
        return getComputedStyle ? getComputedStyle(obj, null) : obj.currentStyle;
    }

    function animate(obj, target, callback) {
        clearInterval(obj.t);

        obj.t = setInterval(function () {
            var left = parseInt(getStyle(obj).left);
            var step = Math.ceil((target - left) / 10);
            if (Math.abs(step) <= 1) {
                obj.style.left = target + "px";
                clearInterval(obj.t);
                //这个条件成立时，动画执行结束  回调函数
                if (callback) {
                    callback();
                }

            } else {
                obj.style.left = left + step + "px";

            }
        }, 16)
    }

    /*
        直接使用setInterval会有问题
        首先，队列中点击事件的堆积，当setInterval休眠后，队列中事件会堆积。当休眠结束，会同时执行
        轮播是有动画，动画是需要消耗事件的。我们应该做的是，当动画结束后再开始计时，setInterval达不到这样的效果


     */

    next.t = setTimeout(function () {
        next.click()
    }, 1000)
}())
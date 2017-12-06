;(function($){
        $('.input input[type="text"]').on('focus', function () { 
            $(this).parent().children('em').css('display', 'inline-block');        
        })
        $('.input input[type="text"]').on('focusout', function () {
            $(this).parent().children('em').css('display', 'none');
        })
        // 验证码
        var show=document.getElementById("show-y");
        function createcode(){
            var str ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var length=str.length;
            var index,sum;
            for(var i=0;i<4;i++){
                index=Math.floor(Math.random()*length);
                sum=str.charAt(index);
               show.innerText+=sum;
             
            }
        }
            createcode();
        $('.btn1,.show-y').on('click',function(){     
                show.innerText = "";
                createcode();
                // return false;       
        })
        // 验证码倒计时
        var TIME=60;
        var time=TIME;
        // var yr=document.getElementsByClassName('yr');
   
        $('.uu').on('click',function(){
            if ($('input[name="phone"]').val()) {
                fn(this);
                $(this).attr("disabled", true);
            } else {
                $('.em').css('display','inline-block')
            }
        })
        function fn(obj){
            $(obj).val(time +"秒后重新获取");
            time--;
            if(time >= 0){
                setTimeout(function(){
                    fn(obj)
                },1000)
            }else{
                $(obj).attr("disabled",false);                
                $(obj).val("获取验证码");
                time=TIME;
                
            }
        }
   

//  表单验证
    $(".form").validate({
        errorClass:"e",
        errorElement:"em",
        errorPlacement:function(error,ele){
            ele.parent().children('em').html(error);
        },
        rules:{
            phone:{
                required:true,
                isPhone:true,
                remote:{
                    url:"../php/phone.php",
                    type:"POST",
                    data:{
                        name:function(){
                            return $('[name=phone]').val();
                        }
                    }
                }
            },
            password:{
              required:true,
              isPassword:true,
              remote:{
                  url:"../php/password.php",
                  type:'POST',
                  data:{
                    name:function(){
                        return $('[name=password]').val();
                    }
                  }
              }      
           },
           repassword:{
               required:true,
               equalTo:"[name='password']"
           },
           Captcha:{
               required:true,               
           },
         

        },
        messages:{
            phone:{
                required:"请填写你的手机号码",
                remote:"该手机号已被注册",
            },
            password:{
                required:"请输入以字母开头的6-16位字符的密码",
            },
            repassword:{
                required:"请再次输入密码",
                equalTo:"两次输入密码不一致，请重新输入",
            },
            Captcha:{
                required:"请输入验证码"
            },
           
        },
        submitHandler:function(f){
            $.ajax({
                url:"../php/add.php",
                type:"POST",
                // data: ({ phone: $('[name=phone]').val(), password: $('[name=password]').val()}),
                data:$(f).serialize(),
                dataType:"text",
                success:function(data){
                    if(data=="注册成功"){
                        alert("注册成功"),
                        f.reset();
                    }
                }
            })
        }
    })

  
}(jQuery))
$(function($){
    $("#form-sub").on("click",function(){
        var lname = $("#name").val();
        var llink = $("#link-name").val();
        var lcontact = $("#contact").val();
        var lduce = $(".introduce").val();
        var lcaptcha = $("#captcha").val();
        if(!lname){
            alert("网站名称不能为空");
            return false;
        }
        if(!llink){
            alert("网站地址不能为空");
            return false;            
        } 
        if(!lcontact){
            alert("联系方式不能为空");
            return false;            
        }
        if(!lcaptcha){
            alert("验证码不能为空");
            return false;            
        }
    })
    
    // $('form').validate({
    //     // debug:true,
    //     onkeyup:false,
    //     rules:{
    //         username:{
    //             required:true, 
    //         },
    //         linkName:{
    //             required: true,
    //             remote:{
    //                 url:"validate.php",
    //                 type:"POST",
    //                 dataType:"JSON",
    //                 data:{
    //                     name:function(){
    //                         return $('[name="username"]').val();
    //                     }
    //                 } 
    //             }
    //         },
    //         contact:{
    //             required:true,
    //         }
    //     },
    //     messages:{
    //         username:{
    //             required:"必填项",
    //         },
    //         linkName:{
    //             required:"必填项",
    //             remote:"该网址已存在"
    //         },
    //         contact:{
    //             required:"必填项",
    //         }
    //     },
    //     submitHandler:function(form) {
    //         $.ajax({
    //             url:"validateAdd.php",
    //             type:"POST",
    //             dataType:"JSON",
    //             data:$(form).serialize(),
    //             success:function(data){
    //                 alert(data.msg);
    //                 if(data.code==200){
    //                     form.reset();
    //                 }
    //             }
    //         })
    //     }
       
    // })
    
}(jQuery))
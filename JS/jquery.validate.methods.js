;(function($){
	// 手机号
	$.validator.addMethod("isPhone",function(value,element){
		var reg=/^1(3|4|5|7|8)\d{9}$/;
		return this.optional(element) || value.match(reg);
	},"手机号格式错误，请重新输入")

	//密码
	$.validator.addMethod("isPassword",function(value,element){
		var reg=/^[a-zA-Z]\w{5,11}$/;
		return this.optional(element) || value.match(reg);
	},"请输入正确格式的密码")

}(jQuery))
// 在页面中添加多个表单
// 要求:
// 表单获得焦点时，下方显示表单填写规则
// 表单失去焦点时校验表单内容
// 校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
// 校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
//点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹
//窗显示“提交成功”，否则显示“提交失败”

var username=document.getElementById("username");
var password=document.getElementById("password");
var repassword=document.getElementById("repassword");
var email=document.getElementById("email");
var status=document.getElementById("status");
var inputs=document.getElementsByTagName("input");
var submit=document.getElementById("submit");

var validations={
	nameValidate: function(){
		if(username.value.length==0){
			this.wrongValidate(username,"名称不能为空");
		}
		else if(username.value.length<4 || username.value.length>16){			
			this.wrongValidate(username,"请输入4~16个字符");
		}else{
			this.rightValidate(username,"名称可用");
		}
		
	},
	passwordValidate: function(){
		if(password.value.length==0) {
			this.wrongValidate(password,"密码不能为空");
		}else{
			this.rightValidate(password,"密码可用");
		}
	},
	repasswordValidate: function(){
		if(repassword.value.length==0) {
			this.wrongValidate(repassword,"确认密码不能为空");
		}
		else if(password.value!== repassword.value){
			this.wrongValidate(repassword,"两次密码不一致");
		}else{
			this.rightValidate(repassword,"密码可用");
		}
	},
	emailValidate: function() {
		var regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if(email.value.length==0){
			this.wrongValidate(email,"邮箱不能为空");
		}
		else if(!email.value.match(regExp)){
			this.wrongValidate(email,"邮箱格式不正确");
		}else{
			this.rightValidate(email,"邮箱可用");
		}
	},
	wrongValidate: function(ele,comment){
		ele.className="ierror";
		ele.nextElementSibling.className="perror";
		ele.nextElementSibling.innerHTML=comment;
	},
	rightValidate: function(ele,comment){
		ele.className="iright";
		ele.nextElementSibling.className="pright";
		ele.nextElementSibling.innerHTML=comment;
	}
}
for(var i=0;i<inputs.length;i++){
	inputs[i].addEventListener("focus", function(){
		this.nextElementSibling.className="show";
	})
	inputs[i].addEventListener("blur", function(){
		switch(this.id){
			case 'username':
				validations.nameValidate();
				break;
			case 'password':
				validations.passwordValidate();
				break;	
			case 'repassword':
				validations.repasswordValidate();
				break;
			case 'email':
				validations.emailValidate();
				break;
		}		
	})
}

submit.onclick = function (){
	var flag=0;
	for(var opt in inputs){
		console.log(opt);
		if(opt.className="ierror"){
			flag ++;
			
		}
		
	}
	if(flag>0){
		alert("wrong");
	}
	else {
		alert("pass");
		}
}
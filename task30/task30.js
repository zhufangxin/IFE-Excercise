// 在页面中添加多个表单
// 要求:
// 表单获得焦点时，下方显示表单填写规则
// 表单失去焦点时校验表单内容
// 校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
// 校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
//点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，弹
//窗显示“提交成功”，否则显示“提交失败”

var username=document.getElementById("username");
var status=document.getElementById("status");
var inputs=document.getElementsByTagName("input");

var validations={
	namevalidate: function(){
		if(username.value.length==0){
			this.wrongValidate(username,"名称不能为空");
		}
		else if(username.value.length<4 || username.value.length>16){			
			this.wrongValidate(username,"请输入4~16个字符");
		}else{
			this.rightValidate(username,"名称可用");
		}
		
	},
	wrongValidate: function(ele,comment){
		ele.className="ierror";
		ele.nextElementSibling.className="perror";
		ele.nextElementSibling.innerHTML=comment;
	},
	rightValidate: function(){
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
		validations.namevalidate();
	})
}

// 如示例图中所示，在页面中完成两个单选框，切换单选框的不同选项时下方显示的表单随之切换。
//当选择在校生时，出现两个select下拉菜单，一个选择城市，一个选择学校，当选择非在校生时，出一个文本输入框
//学校下拉菜单里的学校名单均为城市下拉菜单中所选的城市中的大学，当城市发生变化时，学校一起发生变化
//城市及学校的数据随意编造即可，无需真实完整
var radios= document.getElementsByName("stutype");
for(var i=0;i<radios.length;i++){
		radios[i].onclick = function(){
		alert(this.id);
	} 
}

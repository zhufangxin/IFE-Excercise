//需求： 模拟一个队列，队列的每个元素是一个数字，初始队列为空
// 有一个input输入框，以及4个操作按钮
// 点击"左侧入"，将input中输入的数字从左侧插入队列中；
// 点击"右侧入"，将input中输入的数字从右侧插入队列中；
// 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
// 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
// 点击队列中任何一个元素，则该元素会被从队列中删除

let leftIn=document.getElementById("left-in");
let rightIn=document.getElementById("right-in");
let leftOut=document.getElementById("left-out");
let rightOut=document.getElementById("right-out");
let input=document.getElementsByTagName("input")[0];
let dataQueue=[];
var reg = new RegExp('^[0-9]+$');
leftIn.addEventListener("click", function(){
	if(reg.test(input.value)){
		dataQueue.unshift(input.value);
		showData();
	}else{
		alert("please input a number");
		input.value="";
	}	
} )
rightIn.addEventListener("click", function(){
	if(reg.test(input.value)){
		dataQueue.push(input.value);
		showData();
	}else{
		alert("please input a number");
		input.value="";
	}	
} )
leftOut.addEventListener("click", function(){
	alert(dataQueue[0]);
	dataQueue.shift(dataQueue[0]);
	showData();
} )
rightOut.addEventListener("click", function(){
	alert(dataQueue[dataQueue.length-1]);
	dataQueue.pop(dataQueue[dataQueue.length-1]);		
	showData();
} )		

function showData(){		
	var ul = document.getElementsByTagName("ul")[0];
	ul.innerHTML="";
	if(dataQueue.length==0){
		alert("当前列表为空");
	}
	for(var i=0;i<dataQueue.length;i++){
		var li=document.createElement("li");
		li.innerHTML=dataQueue[i];
		ul.appendChild(li);		
	}
	input.value="";
}
var dataDiv=document.getElementsByClassName("data-queue")[0];
var ul = document.getElementsByTagName("ul")[0];
dataDiv.onclick=function(e){
	dataQueue.splice(dataQueue.indexOf(e.target.value),1);
	ul.removeChild(e.target);		
}


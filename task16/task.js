/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var cityRegex= /^[a-zA-Z\u4e00-\u9fa5]+$/;
	var city=document.getElementById("aqi-city-input").value.trim();
	if(!cityRegex.test(city)){
		alert("CiTY NAME should be Chinese or English");
		document.getElementById("aqi-city-input").value="";
		return false;
	}
	var aqiRegex=/^\d{1,2}$/;
	var aqi=document.getElementById("aqi-value-input").value.trim();
	if(!aqiRegex.test(aqi)){
		alert("AQI should be a number between 1-100");
		document.getElementById("aqi-value-input").value="";
		return false;
	}
	aqiData[city]=aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var aqiTable=document.getElementById("aqi-table");
	aqiTable.innerHTML="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(var item in aqiData){
		aqiTable.innerHTML +="<tr><td>"+item+"</td><td>"+aqiData[item]+"</td><td><button>删除</button></td></tr>"
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.	
  var keyName=this.event.target.parentNode.parentNode.childNodes[0].innerHTML;
  delete aqiData[keyName];
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	var btn=document.getElementById("add-btn");
	btn.onclick=function(){
		addBtnHandle();
	}
	// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	var table=document.getElementById("aqi-table");
	table.addEventListener("click", function(event){
		event=event||window.event; //if event is undefined,assign the value of window.event
		if(event.target.nodeName.toLowerCase()=="button"){
			delBtnHandle();
		}
	})
}

init();

// 一个支持列排序的表格组件
window.onload = function(){
	var data={
		thead:["Name","Chinese","English","Math","Total Score"],
		tbody:[			
			["Lisi",77,79,81,237],
			["Zhangsan",80,70,90,240],
			["Wangwu",95,61,78,234]
		]
	}
	var table=document.createElement("table");
	document.body.appendChild(table);
	
	var thead= document.createElement("thead");
	table.appendChild(thead);
	
	var ths="";
	for(var i=0;i<data.thead.length;i++){		
		ths+= "<th>"+data.thead[i]+"</th>"
	}
	thead.innerHTML = ths;
	
	var tbody= document.createElement("tbody");
	table.appendChild(tbody);
	
	var tds="";
	
	for(var i=0;i<data.tbody.length;i++){
		var tr=document.createElement("tr");
		for(var j=0;j<data.tbody[i].length;j++){
			var td=document.createElement("td");
			td.innerHTML= data.tbody[i][j];
			tr.appendChild(td);
		}
		tbody.appendChild(tr);		
	}
	
	var theads = document.getElementsByTagName("th");	
	for(var i=0;i<theads.length;i++){			
		var ascbtn = document.createElement("button");		
		ascbtn.className = "asc";	
		theads[i].appendChild(ascbtn);
		var descbtn = document.createElement("button");		
		descbtn.className = "desc";	
		theads[i].appendChild(descbtn);
		theads[i].onclick = function(){
			console.log(this);
		}
	}
	
}
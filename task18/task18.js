//window.onload=function(){
	let leftIn=document.getElementById("left-in");
	let rightIn=document.getElementById("right-in");
	let leftOut=document.getElementById("left-out");
	let rightOut=document.getElementById("right-out");
	let buttons=document.getElementsByTagName("button");
	let input=document.getElementsByTagName("input")[0];
	let divData=document.getElementsByTagName("data-queue")[0];
	let dataQueue=[];
	function processData(){		
		leftIn.addEventListener("click", function(){
			dataQueue.unshift(input.value);
			console.log(dataQueue);
			showData();
		} )
		rightIn.addEventListener("click", function(){
			dataQueue.push(input.value);
			console.log(dataQueue);
			showData();
		} )
		leftOut.addEventListener("click", function(){
			alert(dataQueue[0]);
			dataQueue.shift(dataQueue[0]);
			console.log(dataQueue);
			showData();
		} )
		rightOut.addEventListener("click", function(){
			alert(dataQueue[dataQueue.length-1]);
			dataQueue.pop(dataQueue[dataQueue.length-1]);
			console.log(dataQueue);		
			showData();
		} )		
	}
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
		var newLi=document.getElementsByTagName("li");
		for(var i=0;i<newLi.length;i++){
			newLi.index=i;
			newLi[i].onclick=function(){
				ul.removeChild(newLi[newLi.index]);
				console.log(ul);
			}
		}
		console.log(newLi);
		
	}
	// function removeData(){
		// var ul = document.getElementsByTagName("ul")[0];
		// var li= ul.children;
		//for(var i=0;i<li.length;i++){
		// li[i].onclick=function(){
			// ul.removeChild(li[i]);
		// }
		//}
	// }
	
	window.onload=function(){
		processData();		
	}
//}

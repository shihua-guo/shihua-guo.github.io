window.onload = function(){
    var obtn = document.getElementById('Ct_fhDingBu');
	//获取页面可视区的高度
	var clientHeight= document.documentElement.clientHeight||document.body.clientHeight;
	var timer = null;
	var isTop = true;
    
	window.onscroll=function(){
         //获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop||document.body.scrollTop;
           if (osTop >= clientHeight){
            obtn.style.display="block";//显示按钮
		}else {
			obtn.style.display='none'; //隐藏按钮
		}
		if (!isTop){
			clearInterval(timer);
		}
		isTop = false;
	};	
	obtn.onclick = function(){
		//设置定时器
		alert(osTop);
		timer = setInterval(function(){	
            var osTop = document.documentElement.scrollTop||document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop +ispeed;
			
			isTop = true;
			console.log(osTop -ispeed);
			if (osTop === 0){
				clearInterval(timer);
			}
		},30);
	};
	
};
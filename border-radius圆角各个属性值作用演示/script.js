window.onload = function(){
	(function(){
		var demo = document.getElementById("demo");
		var ranges = document.querySelectorAll('input');
		var spans = document.querySelectorAll('span');
		var showMsg = document.getElementById('showMsg');
		var btn = document.getElementById('btn');
		[].forEach.call(ranges,function(item,index){
			item.addEventListener('change',function(){
				spans[index].innerHTML = item.value;
				var msg = '';
				for(var i=0;i<spans.length;i++){
					if(i ==3 ){
						msg += spans[i].innerHTML + 'px/';
					}else{
						msg += spans[i].innerHTML + 'px ';
					}
				}
				showMsg.innerHTML = 'border-radius: '+msg;
				demo.style.borderRadius = msg;
			})
		});
		
		btn.addEventListener('click',function(){
			for(var i=0;i<ranges.length;i++){
				ranges[i].value = 0;
				spans[i].innerHTML = 0;
				showMsg.innerHTML = 'border-radius: 0px 0px 0px 0px/0px 0px 0px 0px';
				demo.style.borderRadius = '0px 0px 0px 0px/0px 0px 0px 0px';
			}
		})
		
	})();
}

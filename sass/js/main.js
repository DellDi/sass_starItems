requirejs.config({
	paths:{
		jquery:"jquery.min"						//确定jquery入口路径，修改文件。也可以修改根路径
	}
});

requirejs(['jquery','backtop'], function($,backtop){
	 /* new backtop.Backtop($('#backTop'),{
		 mode:'go'
	 });	 */			//注意！！！这里就是实例化的过程，注意对照$('#id')对象，Backtop方法需要($,opts)  即对象和参数！！！！！！


/* 写成Jquery插件的写法 */
$('#backTop').backtop({
	mode:'move',
	pos:0,
	speed:1500
});
//此时就已经封装成了一个jquery插件了





// 	var scroll= new scrollto.ScrollTo({
// 		dest:0,
// 		speed:800
// 	});
// 	
// 	$('#backTop').on('click', $.proxy(scroll.move,scroll));  //需要调整this指向$.proxy()方法
	
// 	$(window).on('scroll',function(){
// 		checkPosition($(window).height());  //运用匿名函数进行传参   //只用滚动一个window的高度就可以了进行相关淡入淡出
// 	});
// 	checkPosition($(window).height());
// 	function move(){  
// 		$('html,body').animate({
// 			scrollTop:0
// 		},800)
// 	}
// 	function go(){
// 		$('html,body').scrollTop(0);
// 	}
// 	function checkPosition(pos){
// 		if($(window).scrollTop()>pos){
// 			$('#backTop').fadeIn();
// 		}
// 		else{
// 			$('#backTop').fadeOut();
// 		}
// 	}
});
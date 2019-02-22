define(['jquery','scrollto'],function($,scrollto){  		//$符号就表示我们的jQ对象,本页面是为了封装成jquery插件
	function Backtop(el,opts){
		this.opts=$.extend({},Backtop.DEFAULT,opts);
		this.$el=$(el);		//el参数转化为JQ对象,取el对象，this.$el就是jquery取到的对象，类似getElementById
		this.scroll=new scrollto.ScrollTo({			//这里是添加参数内容, new对象.属性方法
			dest:0,
			speed:this.opts.speed
		});
		
		this._checkPosition();
		if(this.opts.mode =='move'){
			this.$el.on('click',$.proxy(this._move,this));//this 改为目前构造函数的实例对象
		}else{
			this.$el.on('click',$.proxy(this._go,this));
		}
				
		$(window).on('scroll',$.proxy(this._checkPosition,this));  //加下划线，代表方法仅供内部使用 
	}
	Backtop.DEFAULT={
		mode:'move',
		pos:$(window).height(),			//默认监控高度为一个窗口的高度,修改为0，为正常
		speed:800
	};
	Backtop.prototype._move=function(){
		this.scroll.move();
	};
	Backtop.prototype._go=function(){
		this.scroll.go();
	};
	Backtop.prototype._checkPosition=function(){
		var $el=this.$el;			 	//局部变量是快于通过点来访问的。优化
		
		if($(window).scrollTop()>this.opts.pos){
			$el.fadeIn();
		}else{
			$el.fadeOut();
		}
	};
	
	$.fn.extend({
		backtop:function(opts){
			this.each(function(){		//开阔循环,遍历实例化对象
				new Backtop(this,opts);	//this 对象需要返回
			});
			this; 		//this返回实例引用对象,这里的return可以省略。！！！注意这里返回，代表可以使用链式表达。
		}
	});
	return {
		Backtop:Backtop 
	};
});
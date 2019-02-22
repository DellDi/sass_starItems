define(['jquery'],function($){						//这里代表需要用到jquery，$标识jquery对象
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULT,opts); //参数覆盖默认值到空位返回，取返回值
		this.$el=$('html, body');			//这里利用到了缓存的知识，优化了性能
	}
	ScrollTo.prototype.move=function(){
		var opts=this.opts,
		dest=opts.dest;
		
		if($(window).scrollTop() != dest){
			if(!this.$el.is(':animated')){
				console.log(1);		//防止多次执行！！!
				this.$el.animate({ 
					scrollTop:dest
				},opts.speed);
			}
		} 
	};
	ScrollTo.prototype.go=function(){
		var dest=this.opts.dest;
		if($(window).scrollTop() != dest){
			this.$el.scrollTop(dest);
		}
		
	};
	ScrollTo.DEFAULT={
		dest:0,
		speed:800
	};
	return {
		ScrollTo:ScrollTo   //向外暴露属性方法
	};
});
var Beverage=function(){};

Beverage.prototype.boilWater=function(){
	console.log("把水煮沸");
};

Beverage.prototype.brew=function(){
	throw new Error('子类必须重写该方法');
};

Beverage.prototype.pourIncup=function(){
	throw new Error('子类必须重写该方法');
};

Beverage.prototype.addCondiments=function(){
	throw new Error('子类必须重写该方法');
};
//钩子方法
Beverage.prototype.customerWantsCondiments=function(){
	return true;
}

//init封装了子类会以何种形式进行顺序
Beverage.prototype.init=function(){			
	this.boilWater();
	this.brew();
	this.pourIncup();
	if(this.customerWantsCondiments()){
		this.addCondiments();
	}	
}


var Tea=function(){};

Tea.prototype.brew=function(){
	console.log("用沸水去浸泡茶叶");
}
Tea.prototype.pourIncup=function(){
	console.log("把茶水倒进杯子");
}
Tea.prototype.addCondiments=function(){
	console.log("加柠檬");
}
//2.假设我不想加柠檬
Tea.prototype.customerWantsCondiments=function(){
	return window.confirm('请问需要加调料吗')
}

//1.继承

Tea.prototype=new Beverage();

var tea=new Tea();
tea.init();




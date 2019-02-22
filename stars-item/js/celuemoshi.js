var performanceS=function(salary){
	return salary*4;
};
var performanceA=function(salary){
	return salary*3;
};
var performanceB=function(salary){
	return salary*2;
};



/* var calulateBonus=function(level,salary){
	if(level==='S'){
		return performanceS(salary);//直接将方法调用回来
	}
	if(level==='A'){
		return performanceA(salary);
	}
	if(level==='B'){
		return performanceB(salary);
	}
};
calulateBonus('S',2000); */


var strategies={			//将算法封装到对象之中
	S:function(salary){
		return salary*4;
	},
	A:function(salary){
		return salary*3;
	},
	B:function(salary){
		return salary*2;
	},
	C:function(salary){
		return salary*1;
	}
};

var calulateBonus=function(level,salary){
	return strategies[level](salary);		//直接调用策略中的方法，新添加策略的话，只需要在新增加的策略汇总添加策略C.而不需要增加核心逻辑calulateBonus
};
calulateBonus('S',2000);
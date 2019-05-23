//点击返回上一个页面
returnFn()
function returnFn(){
	$(".header span").eq(0).on('tap',function(){
		console.log(1);
		window.history.back()
	})
}

//回到顶部
fnTop()
function fnTop(){	
		$(window).on('scroll',function(){//滚动条位置发生改变触发事件
				var iH = window.pageYOffset;
				if(iH>94){//设置搜索的位置
					$('.header').css({
						position: 'fixed',
						left : 0,
						top : 0
					})
				}else{
					$('.header').css({
						position: 'relative',
						left : 0,
						top : 0
					})
				}
				if(iH >=300){
						$('.return').show();
					}else if(iH <300){
						$('.return').hide();
					}
		})
		var timer = null;
		$('.return').on('tap',function(){
			timer = setInterval(function(){
					var h = window.pageYOffset;//获取滚动条的高度
					if(h<=0){//判断滚动条的高度有没有达到顶端
						clearInterval(timer);//true,关闭定时器
						return;
					}else{
						h -= 20;//false,每次都往上挪动一点
						window.scrollTo(0,h);//重新设置滚动条的位置
						}
			},1)
		})
}
//点击跳转到商品详情页面
fndetails()
function fndetails(){
		var x = null;
		var y = null;
	$('.product ul').on('touchstart',function(ev){//手机按下时记录手指的位置信息
		ev = ev.changedTouches[0];
		x = ev.pageX;
		y = ev.pageY;
	})
	$('.product ul').on('touchstart', function(ev){//手机抬起的时候的位置信息
		ev = ev.changedTouches[0];
		var disx = ev.pageX ;
		var disy = ev.pageY;
		if(x == disx && y == disy){//比较手指按下与抬起的位置信息，判断是否相等，相等说明是点击
			if(ev.target.nodeName == 'DIV'){
				window.location.href = './details.html';
			}
			if(ev.target.nodeName == 'IMG'){
				window.location.href = './details.html';
			}
			//点击添加购物车
			if(ev.target.nodeName == 'I'){
				console.log(2);
			}
		}
	})
}
//去掉浏览器默认行为，设置rem字体
document.addEventListener('touchend touchmove',function(ev){
	ev.preventDefault();
})

window.onresize = function(){
	fnResize();
}

fnResize();
function fnResize(){
	var iW = window.innerWidth;
	var html = document.getElementsByTagName('html')[0];
	html.style.fontSize = iW/7.5 + 'px';
}
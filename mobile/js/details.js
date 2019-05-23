var mySwiper = new Swiper('#banner', {
  autoplay:true,
	loop : true,
  pagination: {
    el: '.swiper-pagination',
  }
});
//点击返回上一个页面
returnFn()
function returnFn(){
	$(".header span").eq(0).on('tap',function(){
		console.log(1);
		window.history.back()
	})
}
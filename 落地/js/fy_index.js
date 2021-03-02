
$(function() {
	//banner
	var img_ratio = 750 / 570;
	var swiperH = $(window).width() / img_ratio;
	$(".imgs-box").css("height", swiperH + "px");
	var swiper1  = new Swiper("#swiper1 ", {
		paginationClickable :true,
		lazyLoadingInPrevNext: true,
		onInit: function (swiper) {
			var len = $("#swiper1  li").length;
			$("#swiper1 .count").html(1+'/'+len)
		},
		onSlideChangeEnd: function (swiper) {
			var len = $("#swiper1  li").length;
			$("#swiper1 .count").html([swiper.activeIndex+1]+'/'+len)
		}
	});
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
		clearInterval();
		setTimeout(function () {
			var swiperH = $(window).width() / img_ratio;
			$(".imgs-box").css("height", swiperH + "px");
		}, 1e3 / 60)
	}, false);
	//小区信息切换
	$(".xq-mess .tab-menu a").on('click',function () {
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$(".xq-mess .tab-show").children(".item").eq(index).show().siblings().hide();
	})
	//参考首付切换
	$(".cksf .tab-menu a").on('click',function () {
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$(".cksf .tab-show").children(".item").eq(index).show().siblings().hide();
	})
});
//出价弹窗
function send2(e) {
	var phone=$(e).parent().siblings().find(".tel").val();
	var id =$(e).attr("id")
	var yzm = $(e).parent().siblings().find(".yzm").val();
	var bid= $(event.target).data("bid");
	var price = $(e).parent().siblings().find(".price").val();
	if($.trim(price) == ""){
		poptip('出价不能为空！');
		return;
	}else if ($.trim(phone) == "") {
		poptip('手机号码不能为空！');
		return;
	} else if (!mobilePatternCN.test(phone) && !mobilePatternHK.test(phone)) {
		poptip('请输入正确的手机号码！');
		return;
	} else if (yzm != 0000) {
		console.log(yzm)
		poptip('请输入正确的验证码！');
		return
	} else {
		$.get('https://smartprogram.jiwu.com/common/retainCustomer', {
			"mobile": phone,
			"type": type,
			"bid": bid
		}, function (data) {

		}, 'jsonp');
	}
	//百度ocpc
	window._agl && window._agl.push(['track', ['success', {t: 3}]]);
	recordUserlog(phone, triggerButton, bid);
	poptip("恭喜您 报名成功!");
	return;

}
// 弹窗
//咨询底价弹窗
function zxlc() {
	$(".pop-zxlc").show();
}
//咨询学校
function school() {
	$(".pop-school").show();
}
//咨询学校
function setPrice() {
	$(".pop-price").show();
}
//咨询学校
function cjcx() {
	$(".pop-cjcx").show();
}
function ldzx() {
	$(".pop-ldzx").show();
}
function hqdj() {
	$(".pop-hqdj").show();
}
function yykf() {
	$(".pop-yykf").show();
}
function zxff() {
	$(".pop-zxff").show();
}
$(".close-pop").click(function () {
	$(".pop-wrap").hide()
})


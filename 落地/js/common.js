$(function () {
	showYzmbox();
	up();
	$(".hx-box li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	})
	$('.range-slider').jRange({
		from: 100,
		to: 1800,
		step: 1,
		scale: ['100万','1800万'],
		format: '%s万',
		width: '95%',
		showLabels: true,
		isRange : false,
		//滑块滑动时 触发的函数
		onstatechange: function () {
			var val = $('.range-slider').val();
			console.log(val)
		}
	});
	
})
// tip弹框提示
function poptip(txt,delay){
	var delay=delay||3000;
	var html='<div class="poptips"><p>'+txt+'</p></div>';
	$("body").append(html);
	setTimeout(function(){
		$(".poptips").remove();
	},delay);
}
//报名
var mobilePatternHK = /^(\+852\s)?[5689]{1}\d{7}$/;
var mobilePatternTW = /^(\+886\s)?[0]{1}[9]{1}\d{8}$/;
var mobilePatternCN = /^(\+86\s)?1[3456789]{1}\d{9}$/;
function send(e){
	var phone=$(e).parent().siblings().find(".tel").val();
	var id =$(e).attr("id")
	var yzm = $(e).parent().siblings().find(".yzm").val();
	var bid= $(event.target).data("bid");
	if ($.trim(phone) == "") {
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

};

//判断验证码输入框是否展示
function showYzmbox() {
	var $this = $(".formBox .sendYzm")
	if($this.length > 0){
		$this.parent().siblings(".yzmbox").show();
	}
}
//发送验证码’
function yzmCountDown(e) {
	var phone = $(e).siblings(".tel").val();
	if(phone ==''){
		poptip('手机号码不能为空');
	}else if(!(/^1[3456789]\d{9}$/.test(phone))){
		poptip('请输入正确的手机号码');
	}else{
		if ($(e).hasClass("disable")) return;
		var count = 60;
		$(e).text(count + "秒后重发").addClass("disable");
		var timer = setInterval(function() {
			if (count <= 0) {
				$(e).text("发送验证码").removeClass("disable");
				clearInterval(timer);
			} else {
				count--;
				$(e).text(count + "秒后重发");
			}
		}, 1000);
	}

}


// 滚动
function up() {
	//滚动
	var listPanel = $('.scroll-top-window  ul');
	var nubcers = 0; //向上滚动top值
	var dpr = window.devicePixelRatio;
	listPanel.animate({
		'top':(nubcers - 40)*dpr/100 + 'rem'
	}, 3000, 'linear', function() {
		listPanel.css({
			'top': '0px'
		})
			.find("li:first").appendTo(listPanel);  
            up();
	});
}
/**
 *
 * @param mobile 手机
 * @param triggerButton 触发按钮
 * @param buildingId 楼盘ID
 */
function recordUserlog(mobile, triggerButton, bid) {
	if (mobile != null) {
		$.get('https://smartprogram.jiwu.com/common/saveUserLog', {
			"mobile": mobile,
			"bid": bid,
			"triggerPage": "信息流页",
			"triggerButton": triggerButton,
			"jwChannel": "楼盘库",
			"dispatcherTimes": 1,
			"landingPage": "信息流页"
		}, function(data) {

		}, 'jsonp');
	}
}

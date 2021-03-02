function getQueryParam(key, defaultValue) {
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

    let r = window.location.search.substr(1).match(reg);  //匹配目标参数

    if (r != null) {
        return decodeURI(r[2]);
    };

    return defaultValue ? defaultValue : ''; //返回参数值
}
//切换设备链接
function browserRedirect() {
  var sUserAgent= navigator.userAgent.toLowerCase();
  var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp= sUserAgent.match(/midp/i) == "midp";
  var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid= sUserAgent.match(/android/i) == "android";
  var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    if(window.location.href.indexOf('http://open.jiwu.com/')>-1){
      window.location.href='http://open.jiwu.com/m/';
    }else if(window.location.href.indexOf('http://www.jiwuhui.com/open/')>-1){
      window.location.href='http://www.jiwuhui.com/mopen/';
    }else{
      window.location.href='http://m.jiwu.com/zhuanti/open/';
    }
  }
}
//获取url中的参数
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return r[2]; return null;
}

//底部留资

function _submit(e){
    var $form=$(e).closest(".formbox");
    var $name=$form.find("input.name"),$mobile=$form.find("input.mobile"),$city=$form.find("input.city"),$err=$form.find(".error");
    $err.hide();
    var name = $name.val();
    name = name==null?"":$.trim(name);
    if(name==""){
        showmes($err,"请输入姓名!");
        return ;
    }

    var mobile = $mobile.val();
    mobile = mobile==null?"":$.trim(mobile);
    if(mobile==""){
        showmes($err,"请输入手机号!");
        return ;
    }
    var regu =/^[1][3,4,5,8,7][0-9]{9}$/;
    if(!regu.test(mobile)){
        showmes($err,"手机号格式错误!");
        return false;
    }


    var cityname = $city.val();
    cityname = cityname==null?"":$.trim(cityname);
    if(cityname==""){
        showmes($err,"请输入意向城市!");
        return ;
    }
    var referer = document.referrer;
    $.ajax({
        url:"http://m.jiwu.com/jiwuBuild/openCompany/save",
        data:{applyuser:name,cityname:cityname,mobile:mobile,hmsr:getUrlParam('hmsr'),platform:3,searchKeyword:getUrlParam('keywords')},
        type:"post",
        async:false,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        contentType: "application/json;utf-8",
        success:function(result){
            if(1==result.result||"1"==result.result){
                showmes($err,"申请成功!");
                $name.val("");
                $city.val("");
                $mobile.val("");
                sytime=0;

            }else if(2==result.result||"2"==result.result){
                showmes($err,"该号码已提交申请，工作人员会在1-3个工作日内审核！");
            }else{
                showmes($err,"申请失败！");
            }
        },
        error:function(){
            showmes($err,"申请失败！");
        }
    })
}
function showmes($obj, message) {
    $obj.empty().html(message).show();
    setTimeout(function () {
        $obj.hide();
    }, 3000);
}
//返回顶部
function backTop() {
    let scroTop = $(window).scrollTop();
    if (scroTop > 100) {
        $('.backTop').fadeIn(500);
    } else if (/Android|ipad|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.backTop').css("display", 'none')
    } else {
        $('.backTop').fadeOut(500);
    }
}
$(window).scroll(function () {
    if (/Android|ipad|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.backTop').css("display", 'none')

    } else {
        backTop();

    }
});
$(".backTop").click(function () {
    $("html,body").animate({scrollTop: 0}, "fast");
})
$(".join .bottom-form ul li").each(function () {
    $(this).click(function () {
        $(this).toggleClass("on");
    })
})
$(".join .bottom-form ul .text .textInput").click(function () {
    $(this).parent().toggleClass("on");
})
function showPop(){
    $(".pop,.mask").show();
}
$('.pop .close').click(function () {
    $(".pop,.mask").hide();
})
//视频播放
$(".video-play").click(function () {
    $("#video")[0].play();
    $(this).hide();
    $(this).siblings(".mc").hide();

})
//为什加入吉屋轮播图
$("#srcoll-box").slide({
    mainCell: ".scroll-box .scroll",
    vis: 1,
    effect: "left",
    autoPage: true,
    // autoPlay:true,
    trigger: "click",
});
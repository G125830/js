// 菜单切换
$(".menu a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).find("div").addClass("one");
    $(this).prevAll().find("div").removeClass("one");
    $(this).nextAll().find("div").removeClass("one");
})

// 获取底价弹框
function hqdj(){
    $(".pop-hqdj").show();
}
// 预约看房弹窗
function yykf(){
    $(".pop-yykf").show();
}
// 帮我找房弹窗
function bwzf(){
    $(".pop-bwzf").show();
}
// 帮我砍价弹窗
function bwkj(){
    $(".pop-bwkj").show();
}
// 关闭弹窗
$(".close-pop").click(function(){
    $(".pop-wrap").hide();
})
function qc(){
    $(".bottom-text").slideToggle("slow");
    if($("img").hasClass("rotate-up")){
        $("img").removeClass("rotate-up").addClass("rotate-down");
    }else{
        $("img").removeClass("rotate-down").addClass("rotate-up");
    }

}
function searchPop() {
    $(".pop-search").show();
    $("body").css("overflow","hidden")
}

$(function(){
    // 模糊搜索
    $("#soinput").on("input",function(){
        $(".search-list").show();
    });
    $(".search-list").on("click","li",function(){
        $(".search-inp").val($(this).text())
        $(".input-xq").html($(this).text())
        $(".pop-search").hide();
        $("body").css("overflow","inherit")
    });
    $(".pop-search .reset-search").on('click',function () {
        $(".pop-search").hide();
        $("body").css("overflow","inherit")
    })
})

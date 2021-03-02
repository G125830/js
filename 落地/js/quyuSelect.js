
$(function(){
    $(".selcet-quyu").click(function () {
        $(".pop-select").show();
        $(".pop-select").find(".dropUl li").removeClass("on");
        $("body").css({"overflow":"hidden"})
    })
    addArray();
    for(let i=0;i<arr.length;i++) {
        $('.dropProvUl').append("<li class='dropProvLi'>" + arr[i] + "</li>");
    }
    $('.dropProv').toggle();
    $('.dropProvLi').on('click',function(){
        $('.cityName').text( arr2[$(this).index()][0]);
        // $('.dropDown div').css("display","none");
    });
    $('.dropProvLi').on('click',function(){
        $('.dropCity').css("display","block");
        $('.dropCityUl').empty();
        $(this).addClass("on").siblings().removeClass("on");
        //加载商圈
        for(let j=0;j<arr2[$(this).index()].length;j++){
            $('.dropCityUl').append("<li class='dropCityLi'>"+arr2[$(this).index()][j]+"<span class='check'></span></li>");

        }
        $('.dropCityLi').on("click", function () {
            $(this).toggleClass("on");
            $('.selcet-quyu span').html($(".dropCityLi.on").text());

        });
        $(".pop-select .sure").click(function () {
            $('.pop-select').hide();
            $("body").css({"overflow":"inherit"})
        })
        $(".pop-select .reset").click(function () {
            $(this).parent().siblings(".search").find(".dropCityLi").removeClass("on");
        })
    });

});
//把商圈添加到arr2中对应的区域
function addArray(){
     arr=["罗湖区","福田区","龙华新区","南山区","盐田区","宝安区"];
     arr2=["罗湖区","福田区","龙华新区","南山区","盐田区","宝安区"];
    function addTo(id,iArray){
        arr2[id] = [];
        for(let i=0;i<iArray.length;i++){
            arr2[id][i]=iArray[i];
        }

    }
   addTo("0",["白石洲","大学城","大冲","高新园","华侨城","世界之窗","红树湾","深圳湾"]);
   addTo("1",["大学城","大冲","高新园","华侨城","世界之窗","红树湾","深圳湾"]);
   addTo("2",["大冲","高新园","华侨城","世界之窗","红树湾","深圳湾"]);
   addTo("3",["白石洲","大学城","大冲","高新园","华侨城","世界之窗","红树湾","深圳湾"]);
   addTo("4",["白石洲","大学城","大冲","高新园","华侨城","世界之窗","红树湾","深圳湾"]);
   addTo("5",["白石洲","大学城","大冲","高新园","华侨城","世界之窗","红树湾","深圳湾"]);
   addTo("6",["白石洲","大学城","大冲","高新园","华侨城","世界之窗","红树湾","深圳湾"]);
};


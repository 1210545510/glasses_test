/**
 * Created by shipeng on 6/7/2017.
 */
$(function () {
    //Initialize
    $(".tu li").first().show();

    $(".shu li").first().hover().addClass("hover");
    //Fade in/fade out
    $(".shu li").mouseover(function () {
        $(this).addClass("hover").siblings("li").removeClass("hover");
        var index = $(this).index();
        i = index;
        $(".tu li").eq(index).fadeIn().siblings().fadeOut();
    });


    var i = 0;
    var t = function () {
        i++;
        if (i == 3) {
            i = 0;
        }
        $(".shu li").eq(i).addClass("hover").siblings().removeClass("hover");
        $(".tu li").eq(i).show().siblings().hide();
    }

    $("#arrow2").click(function(){
        $(this).hide();
        $(".tu li").eq(1).show().siblings().hide();
        $("#arrow1").show();
    });

    $("#arrow1").click(function(){
        $(this).hide();
        $(".tu li").eq(0).show().siblings().hide();
        $("#arrow2").show();
    });



//          var h = setInterval(t, 3000);
//          $(".midd_1").hover(function() {
//              clearInterval(h);
//          }, function() {
//              h = setInterval(t, 3000);
//          });
})
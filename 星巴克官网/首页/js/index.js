$(function(){


    var $head = $("#head");
    var bFlag = true;
    $(window).on("scroll", function(){
        if(bFlag && $(this).scrollTop() > 200){
            $head.css({
                position: "static"
            });
            bFlag = false;
        }else if(!bFlag && $(this).scrollTop() <= 200){
            $head.css({
                position: "fixed"
            });
            bFlag = true;
        }
    });
});
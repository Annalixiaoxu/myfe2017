require(["jquery"],function(){
    var $searchIpt = $("#search-ipt");
    $("#search span").on("click", function(){
        alert($searchIpt.val());
    });
    $searchIpt.on("keypress", function(e){
        if(e.which == 13){
            alert($searchIpt.val());
        }
    });

    var carousel = new Carousel();
    carousel.init({
        selector : "#imgs",
        imgs : ["img/banner01.png", "img/banner02.png", "img/banner03.png", "img/banner04.png"],
        buttonStyle : "circle",
        arrowPos : "center",
        speed : 500
    });
});
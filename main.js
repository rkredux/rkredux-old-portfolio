$(function(){   
    $("aside").hide();
    $(".open").on("click", function(){
        $("aside").toggle(500);
        $("button > i").toggleClass("fa fa-bars fa fa-times");
    });
});


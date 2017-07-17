$(document).ready(function() {
    $("#apps").hide();
    $("#about").hide();
    $(".btn_proceed").hide();


    $("#app_btn").hover(
        function(){
            $(this).find(".btn_proceed").fadeIn("slow");
            if ($("#buttons").css("margin-top") == "200px"  || $(".chk_400").css("background-color") == "rgb(0, 0, 0)" ){
               $(this).css("height", "120px")
            }
            $("#intro").fadeOut(0, function(){
                $("#apps").fadeIn(0);
            });
        }, function () {
            $(this).find(".btn_proceed").fadeOut("slow");
            if ($(this).css("height") == "120px" ){
               $(this).css("height", "80px")
            }
            $("#apps").fadeOut(0, function(){
                $("#intro").fadeIn(0);
            });
        }
    );

    $("#about_btn").hover(
        function(){
            $(this).find(".btn_proceed").fadeIn("slow");
            if ($("#buttons").css("margin-top") == "200px" ){
               $(this).css("height", "120px")
            }
            $("#intro").fadeOut(0, function(){
                $("#about").fadeIn(0);
            });
        }, function () {
            $(this).find(".btn_proceed").fadeOut("slow");
            if ($(this).css("height") == "120px" ){
               $(this).css("height", "80px")
            }
            $("#about").fadeOut(0, function(){
                $("#intro").fadeIn(0);
            });
        }
    );
});
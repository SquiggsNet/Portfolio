$(document).ready(function() {
    $("#apps").hide();
    $("#about").hide();


    $("#app_btn").hover(
        function(){
            $("#intro").fadeOut(50, function(){
                $("#apps").fadeIn(50);
            });
        }, function () {
            $("#apps").fadeOut(50, function(){
                $("#intro").fadeIn(50);
            });
        }
    );

    $("#about_btn").hover(
        function(){
            $("#intro").fadeOut(50, function(){
                $("#about").fadeIn(50);
            });
        }, function () {
            $("#about").fadeOut(50, function(){
                $("#intro").fadeIn(50);
            });
        }
    );

});
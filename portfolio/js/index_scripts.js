$(document).ready(function() {
    $("#apps").hide();
    $("#about").hide();


    $("#app_btn").hover(
        function(){
			console.log("blue");
            $("#intro").fadeOut(0, function(){
                $("#apps").fadeIn(0);
            });
        }, function () {
            $("#apps").fadeOut(0, function(){
                $("#intro").fadeIn(0);
            });
        }
    );

    $("#about_btn").hover(
        function(){
            $("#intro").fadeOut(0, function(){
                $("#about").fadeIn(0);
            });
        }, function () {
            $("#about").fadeOut(0, function(){
                $("#intro").fadeIn(0);
            });
        }
    );
});
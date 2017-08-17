$(document).ready(function() {
    var filters = "";
    var fade_time = 750;
    $(".title").hide();
    $(".description").hide();
    $(".app_text").hide();
    $(".app_screenshot").hover(
        function(){
            var proj = $(this).children("img");
            var filter = proj.attr("class").split(" ");
            filter.splice($.inArray("ss", filter),1);
            var links = $(this).children(".app_text");
            links.show();
            $(".desktop").hide();
            proj.css({
                    opacity: 1
                });
            $.each( filter, function( i, f ){
                $("#"+f).css({
                    'background-color': 'rgb(85,252,249)',
                    'color': 'rgba(0,0,0,0.9)'
                });
            });
            $("#title_"+proj.attr("id")).show();
            $("#desc_"+proj.attr("id")).show();

        }, function () {
            var proj = $(this).children("img");
            var filter = proj.attr("class").split(" ");
            filter.splice($.inArray("ss", filter),1);
            var links = $(this).children(".app_text");
            proj.css({
                    opacity: 0.3
                });
            $.each( filter, function( i, f ){
                $("#"+f).css({
                    'background-color': 'transparent',
                    'color': 'rgb(85,252,249)'
                });
            });
            links.hide();
            $("#title_"+proj.attr("id")).hide();
             $("#desc_"+proj.attr("id")).hide();
            $(".desktop").show();
        }
    );

    $("#filter li").hover(
        function(){
            $(this).css({
                'background-color': 'rgb(85,252,249)',
                'color': 'rgba(0,0,0,0.9)'
            });
        }, function () {
            $(this).css({
                'background-color': 'transparent',
                'color': 'rgb(85,252,249)'
            });
        }
    );

    $("#filter li").click(function(){
        $(".app_screenshot").hide(fade_time);
        if($(this).attr("id") === "clear_filter"){
            $(".app_screenshot").show(fade_time);
            $("#filter li").removeClass();
        }else if ($(this).attr("class") === "active_filter"){
            $(".app_screenshot").show(fade_time);
            $(this).removeClass();
        }else{
            $("#filter li").removeClass();
            var filter = $(this).attr("id");   
            $.each( $(".ss"), function( i, f ){
                if($.inArray(filter, f.classList)!= -1){
                    $('#'+f.id).parent().show(fade_time);
                }
            });
            $(this).addClass('active_filter');
        }   
    });

    // https://codepen.io/wuxifinger/pen/grjkBZ
	$(window).load(function() {
		setTimeout(loadFinished, 500);
	});
});

function loadFinished(){
	// Animate loader off screen
	$(".loader").fadeOut(1000);
	$("#body").show(1000);
}
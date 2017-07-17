$(document).ready(function() {
    $(".app_screenshot").hover(
        function(){
            var proj = $(this).children("img");
            var filter = proj.attr("class").split(" ");
            filter.splice($.inArray("ss", filter),1);

            $.each( filter, function( i, f ){
                $("#"+f).css({
                    'background-color': 'rgb(85,252,249)',
                    'color': 'rgba(0,0,0,0.9)'
                });
            });

        }, function () {
            var proj = $(this).children("img");
            var filter = proj.attr("class").split(" ");
            filter.splice($.inArray("ss", filter),1);

            $.each( filter, function( i, f ){
                $("#"+f).css({
                    'background-color': 'transparent',
                    'color': 'rgb(85,252,249)'
                });
            });
        }
    );

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
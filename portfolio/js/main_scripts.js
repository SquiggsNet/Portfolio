$(document).ready(function() {

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
$(document).ready(function() {
    $(".footInfo").hide();

// https://codepen.io/wuxifinger/pen/grjkBZ
    $(window).load(function() {
        setTimeout(loadFinished, 500);
    });

    $("#topNav").hover(function(){
        $("#topNav").css({'height': '90px',
                        'transition': '1s'});
        $("#logo img").css({'width': '90px',
                        'transition': '1s'});
        $('.head ul li').css({'font-size': '30px',
                        'padding': '18px 25px 18px 0',
                        'transition': '1s'});         
        // $(".footInfo").show();
        // $("#copy").css({'margin-top':'38px'})
    }, function () {
        $("#topNav").css({'height': '50px'});
        $("#logo img").css({'width': '50px'});
        $('.head ul li').css({'font-size': '18px',
                        'padding': '5px 100px 5px 0'});   
        // $(".footInfo").hide();
        // $("#copy").css({'margin-top':'0'})
    });

    $("#showWebDev").hover(function(){
        if($("#webDevInfo").width() === 0){
            showWebDev();       
        }else{
            hideWebDev();
        }
    }, function () {});

    $("#showAboutInfo").hover(function(){
        if($("#aboutInfo").width() === 0){
            showAboutInfo();      
        }else{
            hideAboutInfo();
        }
    }, function () {});

    $("#foot").hover(function(){
        $("#foot").css({'height': '120px',
                        'transition': '1s'});
        $("#sprites li").css({'display': 'block'});
        $(".footInfo").show();
        $("#copy").css({'margin-top':'38px',
                        'transition': '1s',
                        'font-size': '20px'})
    }, function () {
        $("#foot").css({'height': '30px'});
        $("#sprites li").css({'display': 'inline-block'});
        $(".footInfo").hide();
        $("#copy").css({'margin-top':'0',
                        'font-size': '12px'})
    });
});

function loadFinished(){
    // Animate loader off screen
    $(".loader").fadeOut(1000);
    $("#topNav").css({'height': '50px'});
    $("#foot").css({'height': '30px'});
    $("#webDev").css({'width': '50%'});
    $("#about").css({'width': '50%'});
}

function showWebDev(){
    $("#showWebDev a").html("Less");
    $("#showWebDev").css({'background': 'url(img/cd-arrow-left.svg) no-repeat right center'});
    $("#webDevInfo").css({'width': '50%'});
}

function hideWebDev(){
    $("#showWebDev a").html("More");
    $("#showWebDev").css({'background': 'url(img/cd-arrow.svg) no-repeat right center'});
    $("#webDevInfo").css({'width': '0'});
}

function showAboutInfo(){
    $("#aboutInfo").css({'width': '50%'});
}

function showAboutInfo(){
    $("#showAboutInfo a").html("Less");
    $("#showAboutInfo").css({'background': 'url(img/cd-arrow.svg) no-repeat left center'});
    $("#aboutInfo").css({'width': '50%'});
}

function hideAboutInfo(){
    $("#showAboutInfo a").html("More");
    $("#showAboutInfo").css({'background': 'url(img/cd-arrow-left.svg) no-repeat left center'});
    $("#aboutInfo").css({'width': '0'});
}
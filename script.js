$( document ).ready(function() {
    setTimeout(function(){
    	$('#ray').css({opacity:1});}, 3000);
    setTimeout(function(){
    	$('#logo').addClass('logoZoomEffect');}, 4000);
    setTimeout(function(){
    	$('#banner1').css({opacity:1});
    	$('#banner1Text').css({opacity:1});
    }, 5000);
    setTimeout(function(){
    	$('#banner1').css({opacity:0});
    	$('#banner1Text').css({opacity:0});    	
    }, 6000);
    setTimeout(function(){    	
    	$('#banner2').css({opacity:1});
    }, 6500);
    setTimeout(function(){    	
    	$('#banner2Text').css({opacity:1});
    }, 7000);
     setTimeout(function(){
    	$('#banner2').css({opacity:0});
    	$('#banner2Text').css({opacity:0});    	
    }, 8000);
     setTimeout(function(){    	
    	$('#banner3').css({opacity:1});
    }, 8500);
    setTimeout(function(){    	
    	$('#banner4Text').css({opacity:1});
    }, 9000);

});
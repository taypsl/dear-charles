$(document).ready(function() {
		"use strict";

	/* ================== */
	/* Render with jQuery */
	/* ================== */	
	var sendBtnFired = false;
	var sentFired = false;

	$(window).scroll(function () {
		if ($(this).scrollTop() > 90) {
			$('body').addClass('twilight');
		}
		if ($(this).scrollTop() > 110) {
			$('body').removeClass('sunrise');
			$('body').addClass('sunrise');         
			$('.dark').addClass('fadeout');
		}
		if ($(this).scrollTop() < 100) {
			$('body').removeClass('twilight');
			$('body').removeClass('sunrise');
		}
		
		if (document.body.scrollTop > 110 && sendBtnFired === false) {
			setTimeout(function(){
				$('.send-btn').fadeIn(500);;
			}, 2000); 
			sendBtnFired = true;
		} 
		true	
	});

	$('.send-btn').on('click', function(event) { 
		// $('#plane-path').css({'animation': 'dashScroll 5s linear forwards'});
		$('.dash').addClass('dash-animate');
		$(this).fadeOut(0);
		$('.sent').fadeIn(0);
		setTimeout(function(){
			$('.open').fadeIn(500);
		}, 5250); 
		sentFired = true;
	})

	$('.open').on('click', function(event) {
		$('#note').fadeIn(750);
		$('.sent').fadeOut(500)
		// $('#flight-path').fadeOut(500);
		$('.dash').removeClass('dash-animate');
		$('.close').fadeIn(500);
		$('.open').fadeOut(500);
		
		if (sentFired === false) {
		    setTimeout(function() {
				$('.sent').fadeOut(0);
			}, 3000); 
		    sentFired = true;
		} 
		true
	})

	$('.close').on('click', function(event) {
		$('#note').fadeOut(750);
		$('.close').fadeOut(500); 	
		$('.open').fadeIn(500);

	})



});


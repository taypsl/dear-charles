$(document).ready(function() {
		"use strict";

	/* ================== */
	/* Youtube iframe API */
	/* ================== */
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
			videoId: 'z_AQMaqDLtg',
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}

	function onPlayerReady(event) {
		event.target.playVideo();
	}

	var done = false;
	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 6000);
			done = true;
		}
	}

	function stopVideo() {
		player.stopVideo();
	}

	/* ================== */
	/* Render with jQuery */
	/* ================== */	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 90) {
			$('body').addClass('twilight');
		}
		if ($(this).scrollTop() > 110) {
			$('body').removeClass('sunrise');
			$('body').addClass('sunrise');         
			$('.dark').addClass('fadeout');

			setTimeout(function(){
				$('.send-btn').fadeIn(500);
			}, 3000); 
		}
		if ($(this).scrollTop() < 100) {
			$('body').removeClass('twilight');
			$('body').removeClass('sunrise');
		}
	});

	$('.send-btn').on('click', function(event) { 
		$('#plane-path').css({'animation': 'dashScroll 5s linear forwards'});
		$('.send-btn').fadeOut(0);
		$('.sent').fadeIn(0);
		setTimeout(function(){
			$('.open').fadeIn(500);
		}, 2000); 
	})

	$('.open').on('click', function(event) {
		$("#note").fadeIn(1000);

		$('#flight-path').fadeOut(500);
		$('.close').fadeIn(500);
		$('.open').fadeOut(500);
		$('.send').fadeOut(500);
	})

	$('.close').on('click', function(event) {
		$("#note").fadeOut(1000);

		$('.close').fadeOut(500); 	
		$('.open').fadeIn(500);

	})



});


$(document).ready(function() {
	"use strict";


   $(window).scroll(function () {
      if ($(this).scrollTop() > 90) {
         $('body').addClass('twilight');
      }
      if ($(this).scrollTop() > 110) {
      	 $('body').removeClass('sunrise');
         $('body').addClass('sunrise');
         setTimeout(function() { 
         	$('path').css({'animation': 'dashScroll 7s linear forwards'}); 
         }, 3000);

	     setTimeout(function() {
	     	$('.open').removeClass('hidden');
	     }, 6000);

      }
      if ($(this).scrollTop() < 100) {
      	 $('body').removeClass('twilight');
         $('body').removeClass('sunrise');
      }
   });

   $('.open').on('click', function(event) {
   		$('.note').removeClass('hidden');
   		$('.close').removeClass('hidden');
   		$('.open').addClass('hidden');
   		$('i').css({'z-index':'100000'})
   })

   $('.close').on('click', function(event) {
   	   	$('.close').addClass('hidden');
   	   	$('.note').addClass('hidden');
   	   	$('.open').removeClass('hidden');

   })

});


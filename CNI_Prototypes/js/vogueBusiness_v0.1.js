// JavaScript Document


// Sticky Newsletter slice

		$(function(){
      "use strict";
      
      var lastScroll = 0; 			         //Keeps track of last scroll (Set up a variable to monitor users last scroll position)
      $(window).scroll(function(){           //Sets the current scroll position
          var st = $(this).scrollTop();      //Determines up-or-down scrolling and you can insert a height it needs to be before calling the 1st function below:
          if ($(window).scrollTop() > $('#globalNav').prop('scrollHeight')){ // if ($(window).scrollTop() > 200){
			  $('.newsletterSliceFixed').addClass('sticky'); 
          } 
		else if ($(window).scrollTop() < $('#globalNav').prop('scrollHeight')) { // else if ($(window).scrollTop() < 200) {
          $('.newsletterSliceFixed').removeClass('sticky');
		} 
          lastScroll = st;
      });
    });	



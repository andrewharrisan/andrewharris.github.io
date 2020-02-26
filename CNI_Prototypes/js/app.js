(function () {
  function each(selector, callback) {
    Array.from(document.querySelectorAll(selector)).forEach(callback);
  }

  function setCounterWidth() {
    each('.counter > div', elmnt => {
      var txt = elmnt.clientWidth;
      elmnt.querySelector("span").innerHTML = txt;
    });
  }

  function setAdDisplay() {
    each('.sky300', sky => {
      sky.style.display = 'none';
      var parentWidth = sky.parentNode.getBoundingClientRect().width;
      if (parentWidth >= 300) {
        sky.style.display = '';
      }
    });
  }
	
	function setAdDisplay200() {
    each('.sky200', sky => {
      sky.style.display = 'none';
      var parentWidth = sky.parentNode.getBoundingClientRect().width;
      if (parentWidth >=200 && parentWidth < 300) {
        sky.style.display = '';
      }
    });
  }
	
	function setAdDisplay160() {
    each('.sky160', sky => {
      sky.style.display = 'none';
      var parentWidth = sky.parentNode.getBoundingClientRect().width;
      if (parentWidth >160 && parentWidth < 200) {
        sky.style.display = '';
      }
    });
  }
	
	function setAdDisplay120() {
    each('.sky120', sky => {
      sky.style.display = 'none';
      var parentWidth = sky.parentNode.getBoundingClientRect().width;
      if (parentWidth >120 && parentWidth < 160) {
        sky.style.display = '';
      }
    });
  }
	
	
	function setAdDisplayMPU300() {
    each('.mpu300', sky => {
      sky.style.display = 'none';
      var parentWidth = sky.parentNode.getBoundingClientRect().width;
      if (parentWidth >= 300) {
        sky.style.display = '';
      }
    });
  }


  function updateForViewport() {
    setCounterWidth();
    setAdDisplay();
	setAdDisplay200();
	setAdDisplay160();
	setAdDisplay120();
	setAdDisplayMPU300();
  }

  function init() {
    window.addEventListener('resize', updateForViewport);
    updateForViewport();
  }

  init();
}());





// Hide Header on on scroll down



var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// Navigation Shadow on scroll-up

var shadow = $('header').offset().top;
  $(window).scroll(function (event) {
    var y = $(this).scrollTop(); 
	if (y >= 60) {  $('header').addClass('navShadow'); }
    else { $('header').removeClass('navShadow'); }
  });


// Hamburger menu

	$(".hamburger").click(function(){
  //alert($(this));
  //$("body").toggleClass("active");
  $(".bar1").toggleClass("active");  
  $(".bar2").toggleClass("active"); 
  $(".bar3").toggleClass("active"); 
});




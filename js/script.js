






document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/* for menu bar */
$(document).on("ready",function() {
  var menuState = 0;
    $(".btn-select").on("click",function() {
      if(menuState === 0) {
        $(".mini-menu-options").slideDown("slow");
        menuState = 1;
      } else {
        $(".mini-menu-options").slideUp("slow");
        menuState = 0;
      }
    });
  $(".mini-menu-options li").on("click", function() {
    var numHijos = $(this).children().length;
    if(numHijos < 2) {
      $(".mini-menu-options").hide("fast");
      var texto = $(this).text();
      $(".menu-select .menu-actual").text(texto);
    }
    menuState = 0;
  });
});

let menuBtn = document.getElementById('showMenu');
let miniMenu = document.getElementById('miniMenu');
let actualMenu = document.getElementById('actualMenu');
menuBtn.addEventListener('click', colorDark);
myState=0;
function colorDark(){
  if(myState==0){
    miniMenu.style.backgroundColor="#222";
    actualMenu.style.color="#eee";
    menuBtn.style.color="#eee";
    myState=1
    }else{
      miniMenu.style.backgroundColor="rgba(34, 34, 34, 0.476)";
      actualMenu.style.color="#000";
      menuBtn.style.color="#000";
      myState=0;
  }
   
}







//this is for the slider
$(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
  
});















//team


/* 	$(document).ready(function() {
		$("#owl-demo").owlCarousel ({
			items : 4,
			lazyLoad : true,
			autoPlay : true,
			pagination : true,
		});
  }); */
  
//latest-movies

  $(document).ready(function() {
		$("#owl-demo1").owlCarousel ({
			items : 2,
			lazyLoad : true,
			autoPlay : true,
			pagination : true,
		});
	});



  //contact form
// Input Lock
$('textarea').blur(function () {
  $('#section-d textarea').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('textarea + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('textarea + label + span').css({'opacity': 0});
      }
  });
});

$('#section-d .field:first-child input').blur(function () {
  $('#section-d .field:first-child input').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('.field:first-child input + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('.field:first-child input + label + span').css({'opacity': 0});
      }
  });
});

$('#section-d .field:nth-child(2) input').blur(function () {
  $('#section-d .field:nth-child(2) input').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('.field:nth-child(2) input + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('.field:nth-child(2) input + label + span').css({'opacity': 0});
      }
  });
});

//video play

let playbtn = document.getElementById('play');
let video = document.getElementById('abtvid');
let stopbtn = document.getElementById('stop');

playbtn.addEventListener('click', playVieo);
stopbtn.addEventListener('click', stopVideo);

function playVieo(){
  video.style.opacity='1';
  video.style.zIndex='2';
  video.play();
  playbtn.style.zIndex='-1';
  stopbtn.style.opacity='1';
}

function stopVideo(){
  video.style.opacity='0';
  playbtn.style.zIndex='2';
  stopbtn.style.opacity='0';
  video.pause();
  video.currentTime=0;
}

/* news cards */
$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});


/* $(window).scroll(function () {
  var Bottom = $(window).height() + $(window).scrollTop() >= $(document).height();
if(Bottom )
{
$('#smedia').hide();
}
}); */

var sliderTeam = (function(document, $) {
  
  'use strict';
  
  var $sliderTeams = $('.slider--teams'),
      $list = $('#list'),
      $listItems = $('#list li'),
      $nItems = $listItems.length,
      $nView = 3,
      autoSlider,
      $current = 0,
      $isAuto = true,
      $acAuto = 2500,
      
      _init = function() {
        _initWidth();
        _eventInit();
      },
      
      _initWidth = function() {
        $list.css({
          'margin-left': Math.floor(100 / $nView) + '%',
          'width': Math.floor(100 * ($nItems / $nView)) + '%'
        });
        $listItems.css('width', 100 / $nItems + '%');
        $sliderTeams.velocity({ opacity: 1 }, { display: "block" }, { delay:1000 });
      },
      
      _eventInit = function() {
        
        window.requestAnimFrame = (function() {
          return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(callback, element){
                window.setTimeout(callback, 1000 / 60);
              };
        })();

        window.requestInterval = function(fn, delay) {
            if( !window.requestAnimationFrame       && 
                !window.webkitRequestAnimationFrame && 
                !window.mozRequestAnimationFrame    && 
                !window.oRequestAnimationFrame      && 
                !window.msRequestAnimationFrame)
                    return window.setInterval(fn, delay);
            var start = new Date().getTime(),
            handle = new Object();

            function loop() {
                var current = new Date().getTime(),
                delta = current - start;
                if(delta >= delay) {
                    fn.call();
                    start = new Date().getTime();
                }
                handle.value = requestAnimFrame(loop);
            };
            handle.value = requestAnimFrame(loop);
            return handle;
        }

        window.clearRequestInterval = function(handle) {
            window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
            window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value)   :
            window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
            window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
            window.msCancelRequestAnimationFrame ? msCancelRequestAnimationFrame(handle.value) :
            clearInterval(handle);
        };
        
        $.each($listItems, function(i) {
          var $this = $(this);
          $this.on('touchstart click', function(e) {
            e.preventDefault();
            _stopMove(i);
            _moveIt($this, i);
          });
        });
        
        autoSlider = requestInterval(_autoMove, $acAuto);
      },
      
      _moveIt = function(obj, x) {
        
        var n = x;
        
        obj.find('figure').addClass('active');        
        $listItems.not(obj).find('figure').removeClass('active');
        
        $list.velocity({
          translateX: Math.floor((-(100 / $nItems)) * n) + '%',
          translateZ: 0
        }, {
          duration: 1000,
          easing: [400, 26],
          queue: false
        });
        
      },
      
      _autoMove = function(currentSlide) {
        if ($isAuto) { 
          $current = ~~(($current + 1) % $nItems);
        } else {
          $current = currentSlide;
        }
        console.log($current);
        _moveIt($listItems.eq($current), $current);
      },
      
      _stopMove = function(x) {
        clearRequestInterval(autoSlider);
        $isAuto = false;
        _autoMove(x);
      };
  
  return {
    init: _init
  };

})(document, jQuery);

$(window).load(function(){
  'use strict';
  sliderTeam.init();
});

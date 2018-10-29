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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });



  
    var slider = $('#slider');
    var sliderWrap = $('#slider ul');
    var sliderImg = $('#slider ul li');
    var prevBtm = $('#sliderPrev');
    var nextBtm = $('#sliderNext');
    var length = sliderImg.length;
    var width = sliderImg.width();
    var thumbWidth = width/length;
  
    sliderWrap.width(width*(length+2));
  
    //Set up
    slider.after('<div id="' + 'pager' + '"></div>');
    var dataVal = 1;
    sliderImg.each(
      function(){
        $(this).attr('data-img',dataVal);
        $('#pager').append('<a data-img="' + dataVal + '"><img src=' + $('img', this).attr('src') + ' width=' + thumbWidth + '></a>');
      dataVal++;
    });
    
    //Copy 2 images and put them in the front and at the end
    $('#slider ul li:first-child').clone().appendTo('#slider ul');
    $('#slider ul li:nth-child(' + length + ')').clone().prependTo('#slider ul');
  
    sliderWrap.css('margin-left', - width);
    $('#slider ul li:nth-child(2)').addClass('active');
  
    var imgPos = pagerPos = $('#slider ul li.active').attr('data-img');
    $('#pager a:nth-child(' +pagerPos+ ')').addClass('active');
  
  
    //Click on Pager  
    $('#pager a').on('click', function() {
      pagerPos = $(this).attr('data-img');
      $('#pager a.active').removeClass('active');
      $(this).addClass('active');
  
      if (pagerPos > imgPos) {
        var movePx = width * (pagerPos - imgPos);
        moveNext(movePx);
      }
  
      if (pagerPos < imgPos) {
        var movePx = width * (imgPos - pagerPos);
        movePrev(movePx);
      }
      return false;
    });
  
    //Click on Buttons
    nextBtm.on('click', function(){
      moveNext(width);
      return false;
    });
  
    prevBtm.on('click', function(){
      movePrev(width);
      return false;
    });
  
    //Function for pager active motion
    function pagerActive() {
      pagerPos = imgPos;
      $('#pager a.active').removeClass('active');
      $('#pager a[data-img="' + pagerPos + '"]').addClass('active');
    }
  
    //Function for moveNext Button
    function moveNext(moveWidth) {
      sliderWrap.animate({
          'margin-left': '-=' + moveWidth
          }, 500, function() {
            if (imgPos==length) {
              imgPos=1;
              sliderWrap.css('margin-left', - width);
            }
            else if (pagerPos > imgPos) {
              imgPos = pagerPos;
            } 
            else {
              imgPos++;
            }
            pagerActive();
        });
    }
  
    //Function for movePrev Button
    function movePrev(moveWidth) {
      sliderWrap.animate({
          'margin-left': '+=' + moveWidth
          }, 500, function() {
            if (imgPos==1) {
              imgPos=length;
              sliderWrap.css('margin-left', -(width*length));
            }
            else if (pagerPos < imgPos) {
              imgPos = pagerPos;
            } 
            else {
              imgPos--;
            }
            pagerActive();
        });
    }
  
 
$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    		$(this).toggleClass('open');
    	});
    $('#searchfiltericons').click(function(){
      		$(".SearchFilter").addClass("slideInRight");
          $(this).hide();
          $('#searchfiltericonss').addClass("slideInRight");
            $('#searchfiltericonss').show();

      	});

    $('#searchfiltericonss').click(function(){
          		$(".SearchFilter").removeClass("slideInRight");
              $(this).hide();
              $('#searchfiltericons').show();
              $('#searchfiltericons').addClass("rightSearchFiltericon");
          	});
    $("#nav-icon2").click(function(){

        $("#menuheaderrr").fadeToggle("slow");

    });

    $(window).scroll(function() {
       if ($(this).scrollTop() > 100) {
          	$("#nav-icon2").removeClass('open');
            $("#menuheaderrr").fadeOut("slow");
            $("#menuscroll").addClass("slideInRight2");


       }

      if ($(this).scrollTop() > 120) {

           $("#menuscroll").addClass("slideInRight2");
      }
      if ($(this).scrollTop() < 45) {

           $("#menuscroll").removeClass("slideInRight2");
      }
    });
    $("#Propertytypes").click(function(){

        $("#sublistt1").slideToggle("slow");
        $('#down-icon').hide();
        $('#up-icon').show();

    });
    $("#up-ico").click(function(){

        $("#sublistt1").slideToggle("slow");
        $("#up-icon").hide();
        $("#down-icon").show();

    });
    $("#category").click(function(){

        $("#sublistt2").slideToggle("slow");
        $('#down-icon2').hide();
        $('#up-icon2').show();

    });
    $("#up-icon2").click(function(){

        $("#sublistt2").slideToggle("slow");
        $("#up-icon2").hide();
        $("#down-icon2").show();

    });

    var triggers = $('ul.triggers li');
    var images = $('ul.images li');
    var lastElem = triggers.length-1;
    var target;

    triggers.first().addClass('active');
    images.hide().first().show();

    function sliderResponse(target) {
        images.fadeOut(2000).eq(target).fadeIn(2000);
        triggers.removeClass('active').eq(target).addClass('active');
    }

    triggers.click(function() {
        if ( !$(this).hasClass('active') ) {
            target = $(this).index();
            sliderResponse(target);
            resetTiming();
        }
    });

    $('.next').click(function() {
        target = $('ul.triggers li.active').index();
        target === lastElem ? target = 0 : target = target+1;
        sliderResponse(target);
        resetTiming();
    });
    $('.prev').click(function() {
        target = $('ul.triggers li.active').index();
        lastElem = triggers.length-1;
        target === 0 ? target = lastElem : target = target-1;
        sliderResponse(target);
        resetTiming();
    });

    function sliderTiming() {
        target = $('ul.triggers li.active').index();
        target === lastElem ? target = 0 : target = target+1;
        sliderResponse(target);
    }

    var timingRun = setInterval(function() { sliderTiming(); },5000);
    function resetTiming() {
        clearInterval(timingRun);
        timingRun = setInterval(function() { sliderTiming(); },5000);
    }




    var triggerss = $('ul.triggerss li');
    var imagess = $('ul.imagess li');
    var lastElemm = triggerss.length-1;
    var targett;

    triggerss.first().addClass('active');
    imagess.hide().first().show();

    function sliderResponsee(targett) {
        imagess.fadeOut(2000).eq(targett).fadeIn(2000);
        triggerss.removeClass('active').eq(targett).addClass('active');
    }

    triggerss.click(function() {
        if ( !$(this).hasClass('active') ) {
            targett = $(this).index();
            sliderResponsee(targett);
            resetTimingg();
        }
    });

    $('.next').click(function() {
        targett = $('ul.triggerss li.active').index();
        targett === lastElemm ? targett = 0 : targett = targett+1;
        sliderResponsee(targett);
        resetTimingg();
    });
    $('.prev').click(function() {
        targett = $('ul.triggerss li.active').index();
        lastElemm = triggerss.length-1;
        targett === 0 ? targett = lastElemm : targett = targett-1;
        sliderResponsee(targett);
        resetTimingg();
    });

    function sliderTimingg() {
        targett = $('ul.triggerss li.active').index();
        targett === lastElemm ? targett = 0 : targett = targett+1;
        sliderResponsee(targett);
    }

    var timingRunn = setInterval(function() { sliderTimingg(); },5000);
    function resetTimingg() {
        clearInterval(timingRunn);
        timingRunn = setInterval(function() { sliderTimingg(); },5000);
    }
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    

});

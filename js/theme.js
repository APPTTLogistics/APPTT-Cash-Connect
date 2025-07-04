// js Document

    // Created on   : 09/01/2018.
    // Theme Name   : Negozu - Business and Consulting Services HTML Template.
    // Version      : 1.0.
    // Author       : @CreativeGigs.
    // Developed by : Jubayer al hasan. (jubayer.hasan1991@gmail.com)


(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        // -------------------- Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.theme-menu-wrapper'),
          scroll = $(window).scrollTop();
          if (scroll >= 190) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });

        // ------------------------------ Theme Menu 
        var menu= $("#mega-menu-holder");
          if(menu.length) {
            menu.slimmenu({
              resizeWidth: '991',
              // animSpeed:'medium',
              indentChildren: true,
            });
          }


        // ------------------------------- WOW Animation 
        // var wow = new WOW({
        //     boxClass:     'wow',      // animated element css class (default is wow)
        //     animateClass: 'animated', // animation css class (default is animated)
        //     offset:       40,          // distance to the element when triggering the animation (default is 0)
        //     mobile:       true,       // trigger animations on mobile devices (default is true)
        //     live:         true,       // act on asynchronously loaded content (default is true)
        //   });
        //   wow.init();


        
        // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });
        
        // -------------------- From Bottom to Top Button
            //Check to see if the window is top if not then display button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });
            //Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0},1500);
          return false;
        });



        // --------------------------- Theme Main Banner Slider One
        var banner = $(".banner-one");
        if (banner.length) {
          banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
            height: '600px',
            pagination: true,
            navigation: true,
            thumbnails: false,
            playPause: false,
            pauseOnClick: true,
            autoPlay:false,
            hover: false,
            overlayer: true,
            loader: 'none',
            minHeight: '400px',
            time: 8000,
          });
        };



        // --------------------------- Theme Main Banner Slider Two
        var banner = $(".banner-two");
        if (banner.length) {
          banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
            height: '790px',
            pagination: false,
            navigation: true,
            thumbnails: false,
            playPause: false,
            pauseOnClick: false,
            autoPlay:true,
            hover: false,
            overlayer: true,
            loader: 'none',
            minHeight: '400px',
            time: 4000,
          });
        };



        // ----------------------------- Counter Function
        var timer = $('.timer');
        if(timer.length) {
            timer.appear(function () {
              timer.countTo();
          })
        }

        // ------------------------------------- Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
          fancy.fancybox({
            arrows: true,
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          });
        }



        // ------------------------------- Feature Work
        var tSlider = $ (".feature-work-slider");
        if(tSlider.length) {
            tSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    575:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                },
          })
        }





        // ------------------------------- Service Slider
        var tSlider = $ (".service-slider");
        if(tSlider.length) {
            tSlider.owlCarousel({
              loop:false,
              nav:false,
              dots:false,
              autoplay:false,
              margin:35,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                },
          })
        }



        // ------------------------------- Testimonial Slider One 
        var mSlider = $ (".testimonial-slider-one");
        if(mSlider.length) {
            mSlider.owlCarousel({
               
              navText: ["",""],
              dots:false,
              autoplay:false,
              autoplayTimeout:4000,
              smartSpeed:1000,
              autoplayHoverPause:true,
              lazyLoad:true,
              items:1
          })
        }


        // ------------------------------- Partner Slider
        var pSlider = $ (".partner-slider");
        if(pSlider.length) {
            pSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1200:{
                        items:5
                    }
                },
          })
        }


        // ------------------------------- Partner Slider
        var pSlider = $ (".partner-slider-two");
        if(pSlider.length) {
            pSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items:2
                    },
                    576:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1200:{
                        items:8
                    }
                },
          })
        }


        // -------------------------------  Latest News Slider
        var rpSlider = $ (".latest-news-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:false,
              nav: false,
              dots:false,
              autoplay:true,
              margin:35,
              autoplayTimeout:3500,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                },
          })
        }



        // --------------------------------- Contact Form Validation
          if($('.form-validation').length){
            
          }


          // ---------------------- Date Select
          if($(".datepicker").length) {
            $( ".datepicker" ).datepicker();
          };

          // ---------------------- Time Select
          if ($(".timepicker").length) {
            $(".timepicker").timepicker();
          };

          // ---------------------- Calendar
          if($('#appoinment_calendar').length) {
              $('#appoinment_calendar').monthly();
            }



          // ---------------------------------- Validation Alert
          var closeButton = $ (".closeAlert");
            if(closeButton.length) {
                closeButton.on('click', function(){
                  $(".alert-wrapper").fadeOut();
                });
                closeButton.on('click', function(){
                  $(".alert-wrapper").fadeOut();
                })
            }


          // -------------------------------- Accordion Panel
          if ($('.theme-accordion > .panel').length) {
            $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
                  var heading = $(this).find('.panel-heading');
                  heading.addClass("active-panel");
                  
            });
            $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
                var heading = $(this).find('.panel-heading');
                  heading.removeClass("active-panel");
                  //setProgressBar(heading.get(0).id);
            });
            $('.panel-heading a').on('click',function(e){
                if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
                    e.stopPropagation();
                }
            });
          };

          // ------------------------- Product Quantity
          var inputVal = $("#product-value");
          if(inputVal.length) {
            $("#value-decrease").on('click', function() {
                var v= inputVal.val()-1;
                if(v>=inputVal.attr('min'))
                inputVal.val(v)
              });

            $("#value-increase").on('click', function() {
              var v= inputVal.val()*1+1;
              if(v<=inputVal.attr('max'))
              inputVal.val(v)
            });
          }

          // -------------------------------  Related Product Slider
          var rpSlider = $ (".related-product-slider");
          if(rpSlider.length) {
              rpSlider.owlCarousel({
                loop:true,
                nav: false,
                dots:false,
                autoplay:true,
                margin:30,
                autoplayTimeout:4000,
                smartSpeed:1200,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:2
                      },
                      768:{
                          items:3
                      },
                      992:{
                          items:4
                      }
                  },
            })
          }

          var atmslider = $ (".atmslider");
          if(atmslider.length) {
              atmslider.owlCarousel({
                loop:false,
                nav: false,
                dots:false,
                autoplay:true,
                margin:35,
                autoplayTimeout:4000,
                smartSpeed:1200,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:1
                      },
                      768:{
                          items:2
                      },
                      992:{
                          items:4
                      }
                  },
            })
          }
        
          var atm_content = $ (".atm_content");
          if(atm_content.length) {
              atm_content.owlCarousel({
                loop:false,
                nav: false,
                dots:false,
                autoplay:true,
                margin:35,
                autoplayTimeout:2000,
                smartSpeed:1200,
                lazyLoad:true,
                responsive:{
                      0:{
                          items:2
                      },
                      768:{
                          items:3
                      },
                      992:{
                          items:7
                      }
                  },
            })
          }

          var atm_content2 = $ (".atm_content2");
            if(atm_content2.length) {
                atm_content2.owlCarousel({
                  loop:false,
                  nav: false,
                  dots:false,
                  autoplay:true,
                  // margin:35,
                  autoplayTimeout:2000,
                  smartSpeed:1200,
                  lazyLoad:true,
                  responsive:{
                        0:{
                            items:2
                        },
                        768:{
                            items:3
                        },
                        992:{
                            items:5
                        },
                        1200:{
                            items:5
                        }
                    },
              })
            }
        
    });

    
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').fadeOut(); // will fade out the white DIV that covers the website.
        $('body').css({'overflow':'visible'});
        $("#what-we-do-sec").delay(250).removeClass("d-none");
        $(".nr-sec-img").removeClass("d-none");
        // $("#theme-main-banner").removeClass("d-none");
        $("#main-menu-ul").delay(350).removeClass("d-none");
    })
    
})
(jQuery)
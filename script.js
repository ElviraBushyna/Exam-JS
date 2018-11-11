(function($) {
  "use strict";
  $(document).ready(function() {
    var $description = $(".item-description");
    $("body").on("click", ".icon-drop-down", function() {
      const $this = $(this);
      const $description = $this.next();
      if ($description.is(":hidden")) {
        $description.show("slow");
      } else {
        $description.hide("slow");
      }
    });

    (function() {
 
 
        $("a.topLink").click(function() {
           $("html, body").animate({
              scrollTop: $($(this).attr("href")).offset().top + "px"
           }, {
              duration: 500,
              easing: "swing"
           });
           return false;
        });
      
      
     });
    $(function() {
      var $videoButton = $(".video-btn");
      var $videoImg = $(".video-img");
      var $videoPlay = $(".video-play");
      $("body").on("click",$videoButton, function() {
        $videoPlay.addClass("is-active");

        // $videoImg.hide("slow");
        //   $videoButton.hide("slow");
         $videoPlay.show("slow")
      })
    });


    $(function() {
      $(".slider1").slick({
        dots: false,
        vertical: true,
        prevArrow:
          '<div class="row"><div class="col-md-2"></div><button type="button" class="col-md-10 justify-content-around btn btn-link material-icons icon-drop-down">expand_less</button></div>',
        nextArrow:
          '<div class="row"><div class="col-md-2"></div><button type="button" class="col-md-10 justify-content-around btn btn-link material-icons icon-drop-down">expand_more</button></div>',

        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
    });
    $(function() {
      $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav"
      });
    });
    $(function() {
      $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
    });

    $(function() {
      var map;
      var mapContainer = $("#map")[0];
      var uluru = { lat: 49.012092, lng: 33.643879 };
      var mapCenter = { lat: 49.012092, lng: 36.643875 };
      map = new google.maps.Map(mapContainer, {
        center: mapCenter,
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [
              {
                weight: "2.00"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#9c9c9c"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#f2f2f2"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100
              },
              {
                lightness: 45
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#eeeeee"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#7b7b7b"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#46bcec"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#c8d7d4"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#070707"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          }
        ]

      })
      var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "Right Here!"
      });
      var infowindow = new google.maps.InfoWindow({
        content: "Our main office"
      });
      infowindow.open(map, marker);
      marker.addListener("click", function() {
        infowindow.open(map, marker);
      });
    });



    //     $(function() {
    //       $(".center").slick({
    //         centerMode: true,
    //         centerPadding: "0px",
    //         slidesToShow: 3,
    //         responsive: [
    //           {
    //             breakpoint: 768,
    //             settings: {
    //               arrows: false,
    //               centerMode: true,
    //               centerPadding: "40px",
    //               slidesToShow: 3
    //             }
    //           },
    //           {
    //             breakpoint: 480,
    //             settings: {
    //               arrows: false,
    //               centerMode: true,
    //               centerPadding: "40px",
    //               slidesToShow: 1
    //             }
    //           }
    //         ]
    //       });
    //       $(function() {
    //         $(".slider-single").slick({
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           arrows: true,
    //           fade: false,
    //           adaptiveHeight: true,
    //           infinite: true,
    //           useTransform: true,

    //         //   cssEase: "cubic-bezier(0.77, 0, 0.18, 1)"
    //         });
    //       });
    //       $(function() {
    //         $(".slider-nav")
    //           .on("init", function(event, slick) {
    //             $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    //           })

    //           .slick({
    //             centerMode: true,
    //             centerPadding: "0px",
    //             slidesToShow: 3,
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             dots: false,
    //             focusOnSelect: true,
    //             infinite: true,
    //             responsive: [
    //               {
    //                 breakpoint: 1024,
    //                 settings: {
    //                   slidesToShow: 5,
    //                   slidesToScroll: 5
    //                 }
    //               },
    //               {
    //                 breakpoint: 640,
    //                 settings: {
    //                   slidesToShow: 4,
    //                   slidesToScroll: 4
    //                 }
    //               },
    //               {
    //                 breakpoint: 420,
    //                 settings: {
    //                   slidesToShow: 3,
    //                   slidesToScroll: 3
    //                 }
    //               }
    //             ]
    //           });
    //       });

    //       $(function() {
    //         $(".slider-single").on("afterChange", function(
    //           event,
    //           slick,
    //           currentSlide
    //         ) {
    //           $(".slider-nav").slick("slickGoTo", currentSlide);
    //           var currrentNavSlideElem =
    //             '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    //           $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    //           $(currrentNavSlideElem).addClass("is-active");
    //         });
    //   $(function() {
    //         $(".slider-nav").on("click", ".slick-slide", function(event) {
    //           event.preventDefault();
    //           var goToSingleSlide = $(this).data("slick-index");

    //           $(".slider-single").slick("slickGoTo", goToSingleSlide);
    //         });
    //     });
    //       });
    //     });
  });
})(jQuery);

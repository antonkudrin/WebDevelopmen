$(document).ready(function () {
  $(window).on("load", function () {
    //! Подлюченикя прокрутки по #ID
    $(
      "a[rel='home'], a[rel='about'], a[rel='services'], a[rel='portfolio'], a[rel='tariffs'], a[rel='team'], a[rel='blog'], a[rel='contact']"
    ).mPageScroll2id();
  });


  $(document).on("ready", function () {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 2570,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });


  //! Подключения видео фона
  // $("#header").vide("./video/natyre", {
  //   bgColor: "rgba(0, 0, 0, 0.7)",
  // });
});

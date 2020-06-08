$(window).on("load", function () {
  //! Подлюченикя прокрутки по #ID
  $(
    "a[rel='home'], a[rel='about'], a[rel='services'], a[rel='portfolio'], a[rel='tariffs'], a[rel='team'], a[rel='blog'], a[rel='contact']"
  ).mPageScroll2id();

  //! Подключения видео фона
  // $("#header").vide("./video/natyre", {
  //   bgColor: "rgba(0, 0, 0, 0.7)",
  // });
});

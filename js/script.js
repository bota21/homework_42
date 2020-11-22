$(() => {
  $("a.header_wrappers_wrapper_scroll").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 0
    }, 800);
  });

  $('.slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
  });

});


/* Preloader */
$(window).on('load', function () {
    setTimeout(function () {
      $('#preloader').fadeOut('slow', function () {
        $(this).remove();
      });
    }, 2000);
  });
  
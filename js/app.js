(function ($) {

  'use strict';

  var prevScrollTop = 0;
  var $headerNav = $('body > header');

  // every time user scrolls (up or down)
  $(document).scroll(function () {
    var currentScrollTop = $(this).scrollTop();

    // if scrolling downward, show the navbar
    if (currentScrollTop > prevScrollTop) {
      $headerNav.hide();
    }

    // if scrolling upward, show the navbar
    else {
      $headerNav.show();
    }

    // remember where the last scroll position was
    prevScrollTop = currentScrollTop;
  });

})(this.jQuery);

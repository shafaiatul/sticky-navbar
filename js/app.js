var prevScrollTop = 0;
var $headerNav = $('header');

$(document).scroll(function() {
  var currentScrollTop = $(this).scrollTop();

  if (currentScrollTop > prevScrollTop) {
  	$headerNav.hide();
  } else {
  	$headerNav.show();
  }

  prevScrollTop = currentScrollTop;
});

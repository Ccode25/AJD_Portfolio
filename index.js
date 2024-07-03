$("#About").click(function() {
  $('html, body').animate({
      scrollTop: $("#myDiv").offset().top
  }, 100);
});

// $(document).ready(function() {
//   var navbar = $('.nav-bar');
//   var lastScrollTop = 0;

//   $(window).scroll(function() {
//     var scrollTop = $(this).scrollTop();

//     if (scrollTop > lastScrollTop) {
//       // Downscroll
//       navbar.css('transform', 'translateY(-100%)'); // Hide navbar
//     } else {
//       // Upscroll
//       navbar.css('transform', 'translateY(0)'); // Show navbar
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//   });
// });
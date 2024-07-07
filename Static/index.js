// s
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


$(document).ready(function() {
  // Handle click event for all nav-links
  $('.nav-link').on('click', function(event) {
   
    
    // Remove text-warning from all nav-links and add text-white
    $('.nav-link').removeClass('text-warning').addClass('text-white');
    
    // Add text-warning to the clicked nav-link
    $(this).removeClass('text-white').addClass('text-warning');
  });
});



$("#About").click(function() {
  $('html, body').animate({
      scrollTop: $("#myDiv").offset().top
  }, 100);
});




$(document).ready(function() {
  // Handle click event for all nav-links
  $('.nav-link').on('click', function(event) {
   
    
    // Remove text-warning from all nav-links and add text-white
    $('.nav-link').removeClass('text-warning').addClass('text-white');
    
    // Add text-warning to the clicked nav-link
    $(this).removeClass('text-white').addClass('text-warning');
  });
});












































// $(document).ready(function() {
//   // Toggle class for navbar items
//   $(document).on('click', '#About', function(event) {
//     // Prevent default action only if the link is a hash or other specific cases
//     if ($(this).attr('href') === '#' || $(this).attr('href') === '') {
//       event.preventDefault();
//     }
//     // Add the text-warning class to the clicked nav-link
//     $(this).removeClass('text-white').addClass('text-warning');
//   });
// });



  // Function to handle click on nav-links

  // $(document).ready(function() {
  //   // Function to handle click on nav-links
  //   $(document).on('click', '.nav-link', function(event) {
  //     event.preventDefault(); // Prevent default link behavior
  
  //     // Remove active class from all nav-links
  //     $('.nav-link').removeClass('text-warning').addClass('text-white');
  
  //     // Add active class to the clicked nav-link
  //     $(this).removeClass('text-white').addClass('text-warning');
      
  //     // Navigate to the link href
  //     var href = $(this).attr('href');
  //     if (href !== '#' && href !== '') {
  //       window.location.href = href;
  //     }
  //   });
  // });
  





















// $("#About").click(function() {
//   $('html, body').animate({
//       scrollTop: $("#myDiv").offset().top
//   }, 100);
//   $(this).addClass("text-warning");
// });



//   // Event delegation for #Home
//   $(document).on('click', '#Home', function(event) {
//     event.preventDefault(); // Prevent the default action of the link
//     $(this).addClass("text-warning"); // Add the 'text-warning' class
//   });
// });





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

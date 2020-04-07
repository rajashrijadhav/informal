$(document).ready(function(){
    $('.informal-slider').slick({
        // accessibility: false,
       
        //appendArrows: '.header',
        //prevArrow: '.button-prev',
       // nextArrow: '.button-next',

       dots: true,
       arrows: false,
    });

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  jQuery ('.menu-btn').on ('click',function(){
    jQuery ('.header-navbar .navigation').slideToggle(); 
});
    
  });

  
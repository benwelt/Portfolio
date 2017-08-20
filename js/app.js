$(document).ready(function(){
  // Add smooth scrolling when a nave link is clicked
  $("nav").find('a').on('click', function(event){
    //Prevents default scroll and stores the hash value
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // Animates the scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

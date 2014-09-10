$(document).ready(function(){
  $("#sticker").sticky({topSpacing:0});

  // travel to header
  $("#nav-header").click(function() {
    $('html, body').animate({
      scrollTop: $("header").offset().top - 90
    }, 750);
  });

  // travel to about me
  $("#nav-about").click(function() {
    $('html, body').animate({
      scrollTop: $("#about-me-title").offset().top - 106
    }, 750);
  });

  // travel to skill list
    $("#nav-skills").click(function() {
    $('html, body').animate({
      scrollTop: $("#skill-list").offset().top - 170
    }, 750);
  });
    
  $("#nav-projects").click(function() {
    $('html, body').animate({
      scrollTop: $("#projects-title").offset().top - 90
    }, 750);
  });
  
  // travel to footer
  $("#nav-footer").click(function() {
    $('html, body').animate({
      scrollTop: $("footer").offset().top - 90
    }, 750);
  });


  $('.skill-bar').hide();

  $(window).scroll(function() {
    $('.skill-bar').each(function(){
    var imagePos = $('#skill-list').offset().top;
    var topOfWindow = $(window).scrollTop();
      console.log(imagePos + "!");
      console.log(topOfWindow);
      if ((imagePos < topOfWindow+590)) {
        setTimeout(function(){ $('.skill-bar').show(); }, 100);
        $(this).addClass("stretchRight");
      }
    });
  });
});


// $(document).ready( function() {
//   $(".show").hide();

//   $('a').click(function(){
//     $(this).siblings(".skillList").slideToggle();
//     $(this).siblings("a").toggle();
//     $(this).toggle();
//   });
// });

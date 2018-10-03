function init(){
	$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 400) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar").css("background-color", "black"); // if yes, then change the color of class "navbar-fixed-top" to black (#f8f8f8)
      } else {
          $(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
      }
  });
  });
}

window.onload = init;
//this is to show password after clicking on eye icon
//on click event
$(".toggle-password").click(function() {
//toggle between these icon classes
    $(this).toggleClass("fa-eye fa-eye-slash");
    //store toggle attribute here
    var input = $($(this).attr("toggle"));
    //if the it input type = password
    if (input.attr("type") == "password") {
        //change it to text
      input.attr("type", "text");
      
    } else {
        //change it to password
      input.attr("type", "password");
    }
  });


  $(document).ready(function(){
    $("button").click(function(e){
        e.preventDefault();
      $("form").fadeOut(500);
      $("button").fadeOut(500);
      $("h1").fadeIn("slow");
      
      
    });
  });








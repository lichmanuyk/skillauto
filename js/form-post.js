$(document).ready(function() {
  $("form").submit(function() {
      var th = $(this);
      $.ajax({
          type: "POST",
          url: "./mail.php",
          data: th.serialize()
      }).done(function() {
          alert("Спасибо, мы с вами свяжемся!");
          setTimeout(function() {
              // Done Functions
              th.trigger("reset");
          }, 1000);
      });
      return false;
  });
});
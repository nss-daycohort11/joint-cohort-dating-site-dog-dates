define(["jquery", "q"],
  function($, Q){

  return {
    getProfile: function() {
      $.ajax({url: "https://dog-dates.firebaseio.com/"
      }).done(function(candidates) {
        require(["hbs!../templates/----"], function(profileTemplate) {  // needs HBS
          $("results").html(Template(my_profile));
        });
      });
    }
  };
});

define(function(require) {
	var fb = require("firebase");
	var $ = require('jquery');
	var h = require('hbs');
	var auth = require('auth');

 	$.getJSON("https://dog-dates.firebaseio.com/.json", function(data){
    console.log(data);
    require(["hbs!../templates/candidates"], function(dogTemplate) {
		  $("#globalTemplate").html(dogTemplate(data));
		});

  	$(document).on('click', '.favorite', function(event) {
  		var ref = new Firebase("https://dog-dates.firebaseio.com/");
		  var currentUser = ref.getAuth().uid;
		  console.log("auth ", currentUser);
  		console.log("event.target.parentNode ", event.target.parentNode);
		  favoriteKey = $(this).attr("id");
		  console.log("favoriteKey ", favoriteKey);

		  $.getJSON("https://dog-dates.firebaseio.com/" + favoriteKey + ".json", function(data){
		    $(document).ready(function(){
		      $.ajax({
		        url: "https://dog-dates.firebaseio.com/" + ref.getAuth().uid + ".json",
		        method: "POST",
		        data: JSON.stringify(data)
		      }).done(function(data) {
				    require(["hbs!../templates/alpha-dog"], function(dogTemplate) {
						  $("#results").html(dogTemplate(data));
						});
		      });
		    });
		  });
		});
	});
});

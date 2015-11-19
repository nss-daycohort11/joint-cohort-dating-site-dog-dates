define(function(require) {
	var fb = require("firebase");
	var $ = require('jquery');
	var h = require('hbs');
	var auth = require('auth');

	// When the user selects Dog Pack from the navigation bar, the database is read and the corresponding
	// template is called to display all dogs in the DB on a grid system.

	 $("#dog-pack").on('click'), function() {
	   console.log("dog-pack clicked");

	 	$.getJSON("https://dog-dates.firebaseio.com/.json", function(data){
	    console.log(data);
		    require(["hbs!../templates/candidates"], function(dogTemplate) {
				$("#landing-page").html(dogTemplate(data));
			});

// following code is not working but basically is the favorites or "dog bone" code
// if the favorite button is selected the idea is to store their key in a key
		// if the user clicks on dog-bone then use the Uid and create a favorite key on the user which
		// stores the dogs who have given the user a dog bone
		 //  	$(document).on('click', '.favorite', function(event) {
		 //  		// var ref = new Firebase("https://dog-dates.firebaseio.com/");
			// 	var currentUser = ref.getAuth().uid;
			// 	console.log("auth ", currentUser);
		 //  		console.log("event.target.parentNode ", event.target.parentNode);
			// 	favoriteKey = $(this).attr("id");
			// 	console.log("favoriteKey ", favoriteKey);

			// 	$.getJSON("https://dog-dates.firebaseio.com/" + favoriteKey + ".json", function(data){
			// 	    $(document).ready(function(){
			// 	      	$.ajax({
			// 	        url: "https://dog-dates.firebaseio.com/" + currentUser + ".json",
			// 	        method: "POST",
			// 	        data: JSON.stringify(data)
			// 	      	}).done(function(data) {
			// 			    require(["hbs!../templates/dog-bones"], function(dogTemplate) {
			// 					$("#landing-page").html(dogTemplate(data));
			// 	        		console.log("data ", data);
			// 				});
			// 	      	});
			// 	    });
			// 	});
			// });
		});
	});
});

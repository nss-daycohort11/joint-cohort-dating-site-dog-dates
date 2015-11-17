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

		var myFirebaseRef = new Firebase("https://dog-dates.firebaseio.com/");

	// Listen for when anything changes on the "songs" key
		myFirebaseRef.child("dog-dates").on("value", function(snapshot) {

	  // Store the entire songs key in a local variable
	  	var allDogsObject = snapshot.val();

	 	 console.log("allDogsObject ", allDogsObject);

	  	$("body").on('click', '.favorite', function(event) {
			console.log("auth ", auth.getUid());
			var currentUser = auth.getUid();
	  		console.log("event.target.parentNode ", event.target.parentNode);
			favoriteKey = $(this).attr("id");
			console.log("favoriteKey ", favoriteKey);

			// myFirebaseRef.child("dog-dates").orderByChild("uid").equalTo(currentUser).on("value", function(snapshot) {



		});

		});
	});
});

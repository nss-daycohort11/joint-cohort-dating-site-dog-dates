efine(function(require) {
	var fb = require("firebase");
	var $ = require('jquery');
	var h = require('hbs');
	var auth = require('auth');

	// if the user clicks on dog-bone from the navigation bar then the dog bones (i.e. favorites) 
	// that were assigned to the UID are pulled from the database and the corresponding template
	// is called to display the dog bones (favorites)
		$("#dog-bones").on('click'), function() {
		    console.log("dog-bones clicked");

			var currentUser = ref.getAuth().uid;
			console.log("auth ", currentUser);

			$.getJSON("https://dog-dates.firebaseio.com/" + currentUser + ".json", function(data){
				console.log("UID data ", data);

				require(["hbs!../templates/dog-bones"], function(dogTemplate) {
				$("#landing-page").html(dogTemplate(data));
			    console.log("data ", data);
				});
			});		
      	});
	});

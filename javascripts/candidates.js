define(["jquery", "q"],
	function($, Q){

	return {
		getCandidates: function() {
			$.ajax({url: "https://dog-dates.firebaseio.com/"
			}).done(function(candidates) {
				require(["hbs!../templates/cadidates"], function(candidateTemplate) {
				  $("").html(candidateTemplate(candidates));  //  NEED id/class name  
				});
			});
		}
	};
});

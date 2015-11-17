define(["jquery", "q"],
	function($, Q){

	return {
		getCandidates: function() {
			$.ajax({url: "https://dog-dates.firebaseio.com/"
			}).done(function(candidates) {
				require(["hbs!../templates/----"], function(candidateTemplate) {  // needs HBS
				  $("results").html(candidateTemplate(candidates)); 
				});
			});
		}
	};
});

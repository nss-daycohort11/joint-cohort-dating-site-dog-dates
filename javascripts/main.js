// require.config({
//   baseUrl: './javascripts',
//   paths: {
//     'jquery': '../lib/bower_components/jquery/dist/jquery.min',
//     'lodash': '../lib/bower_components/lodash/lodash.min',
//     'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
//     'q': '../lib/bower_components/q/q',
//     'firebase': '../lib/bower_components/firebase/firebase',
//     'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
//   },
//   shim: {
//     'bootstrap': ['jquery'],
//     'firebase': {
//       exports: 'Firebase'
//     }
//   }
// });

// requirejs( ["jquery", "lodash", "firebase", "hbs", "bootstrap", "add-favorite", "bootstrap-rating"],
//     function($, _, _firebase, Handlebars, bootstrap, add, rating) {

//       var tempDogs = {};
//       //var watchedMovies = {};
//       //var wishlistMovies = {};


//       var myFirebaseRef = new Firebase("https://dog-dates.firebaseio.com/");
//       myFirebaseRef.child("dog-dates").on("value", function(snapshot) {
//       var FBDogDate = snapshot.val();

//         $("#searchButton").click(function(evt){
//           console.log(evt);

//           get.getMovie(function(data) {
//             tempMovies = data;

//             require(
//               ['hbs!../templates/alpha_dog'],
//               function(AlphaTemplate){
//                 var populatedTemplate = emplate(tempMovies);
//                 $("#movie-list").html(populatedTemplate);
//               });

//             require(
//               ['hbs!../templates/wishlist'],
//               function(movieTemplate){
//                 var populatedTemplate = movieTemplate({movies:FBMovie});
//                 console.log(FBMovie)
//                 console.log(populatedTemplate)
//                 $("#movie-list").append(populatedTemplate);
//             });

//             require(
//               ['hbs!../templates/watched'],
//               function(movieTemplate){
//                 var populatedTemplate = movieTemplate({movies:FBMovie});
//                 console.log(FBMovie)
//                 console.log(populatedTemplate)
//                 $("#movie-list").append(populatedTemplate);
//                 $('.rating').rating();
//             });

//             $("#titleInput").val('');
//           });
//         });

//         $(document).on('click', "#addToWishlist", function(addevt){
//             console.log("click", addevt);

//             var addFB = $(this).parent().attr('key');
//             add.addMovie(addFB);
//             $(this).attr('disabled','disabled');
//         });

//         $(document).on('click', "#watchedButton", function(addevt){
//             console.log("click", addevt);
//             var watchedKey = $(this).parent().attr("key");
//             var seenIt = new Firebase('https://movie-project.firebaseio.com/movies/' + watchedKey);
//             if ( $(this).parent().attr("watched") === "false" ) {
//                 seenIt.update({'seen-it': true});
//               } else {
//                 seenIt.update({'seen-it': false});
//               }
//         });

//         //Delete Button
//         $( document ).on( "click", "#deleteButton", function() {
//           var titleKey = $(this).parent().attr("key");
//           console.log("titleKey", titleKey);
//           var fb = new Firebase('https://movie-project.firebaseio.com/movies/' + titleKey);
//           fb.remove();
//         });
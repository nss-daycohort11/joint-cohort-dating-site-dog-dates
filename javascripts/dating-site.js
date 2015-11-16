require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(
  ["dependencies", "firebase", "auth"], 
  function(_$_, firebase, auth) {

    $('.btn-facebook').on('click', function(){
      var ref = new Firebase("https://dog-dates.firebaseio.com/");
      var authData = ref.getAuth();

      if (authData === null) {
        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            auth.setUid(authData.uid);
          }
        });
      } else {
        auth.setUid(authData.uid);
      }
      console.log(authData);
    });

    $('.btn-github').on('click', function(){
      var ref = new Firebase("https://dog-dates.firebaseio.com/");
      var authData = ref.getAuth();

      if (authData === null) {
        ref.authWithOAuthPopup("github", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            auth.setUid(authData.uid);
           // require(["core_list"], function() {});
          }
        });
      } else {
        auth.setUid(authData.uid);
        // require(["core_list"], function() {});
      }
      console.log(authData);
    });
    /*
      You can choose to use the REST methods to interact with
      Firebase, or you can use the Firebase API with event
      listeners. It's completely up to each team.

      If you choose the former, I created two boilerplate modules
      named `potential-mates.js`, and `add-favorite.js`.
     */
    
  }
);

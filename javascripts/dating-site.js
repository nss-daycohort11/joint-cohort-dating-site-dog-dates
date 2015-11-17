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
  ["dependencies", "firebase", "auth", "newUser"], 
  function(_$_, firebase, auth, newUser) {
    var ref = new Firebase("https://dog-dates.firebaseio.com/");
    var authData = ref.getAuth();

    if (!ref.getAuth()) {
      $('.btn-facebook').on('click', function(){
        if (authData === null) {
          ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              console.log("Authenticated successfully with payload:", authData);
              auth.setUid(authData.uid);
              window.location.pathname = '../PackPage.html';
            }
          });
        } else {
          auth.setUid(authData.uid);
          window.location.pathname = '../PackPage.html';
        }
        console.log(authData);
      });

      $('.btn-github').on('click', function(){
        if (authData === null) {
          ref.authWithOAuthPopup("github", function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              console.log("Authenticated successfully with payload:", authData);
              auth.setUid(authData.uid);
              window.location.pathname = '../PackPage.html';
            }
          });
        } else {
          auth.setUid(authData.uid);
          window.location.pathname = '../PackPage.html';
        }
        console.log(authData);
      });
    }
    if (!!ref.getAuth().uid && window.location.pathname === '/') {
      window.location.pathname = '../PackPage.html';
    }
  }
);
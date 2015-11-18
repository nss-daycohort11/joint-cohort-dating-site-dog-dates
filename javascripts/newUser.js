define(function(require) {
  var $ = require('jquery');
  var fb = require('firebase');
  var auth = require('auth');
  var ref = new Firebase("https://dog-dates.firebaseio.com/");
  $(document).on('click', '#profileSubmit', function(){

    var name = $('.first-name').val();
    var gender = $('input[name="sex"]:checked').val();
    var email = $('.email').val();
    var breed = $('.breed').val();
    var age = $('.age').val();
    var bio = $('.bio').val();
    var img = $('.img').val();
    var userID = ref.getAuth().uid;
    var fave_snack = $(".snack").val();
    var fave_toy = $(".toy").val();

    var addUser = [{
      "age" : age,
      "bio" : bio,
      "breed" : breed,
      "email" : email,
      "gender" : gender,
      "img" : img,
      "name" : name,
      "uid" : userID,
      "fave_snack": fave_snack,
      "fave_toy": fave_toy
    }];


    $(document).ready(function(){
      $.ajax({
        url: "https://dog-dates.firebaseio.com/" + ref.getAuth().uid + ".json",
        method: "POST",
        data: JSON.stringify(addUser)
      }).done(function(addUser) {
        console.log(addUser);
      });
    });
  });
});
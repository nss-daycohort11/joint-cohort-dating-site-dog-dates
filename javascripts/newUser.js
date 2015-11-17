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
    var roll_over = $('input[name="roll_over"]:checked').val();
    var play_dead = $('input[name="play_dead"]:checked').val();
    var shake = $('input[name="shake"]:checked').val();
    var fetch = $('input[name="fetch"]:checked').val();
    var get_slippers = $('input[name="get_slippers"]:checked').val();
    var speak = $('input[name="speak"]:checked').val();
    var get_paper = $('input[name="get_paper"]:checked').val();
    var neutered = $('input[name="neutered"]:checked').val();
    var puppies = $('input[name="puppies"]:checked').val();
    var fave_snack = $('input[name="fave_snack"]:checked').val();
    var chase_cats = $('input[name="chase_cats"]:checked').val();
    var play_ball = $('input[name="play_ball"]:checked').val();
    var chew_shoes = $('input[name="chew_shoes"]:checked').val();
    var sniff_around = $('input[name="sniff_around"]:checked').val();
    var dig_holes = $('input[name="dig_holes"]:checked').val();
    var bark_at_nothing = $('input[name="bark_at_nothing"]:checked').val();
    var tug_of_war = $('input[name="tug_of_war"]:checked').val();
    var roll_in_filth = $('input[name="roll_in_filth"]:checked').val();
    var dig_through_trash = $('input[name="dig_through_trash"]:checked').val();
    var chase_the_red_dot = $('input[name="chase_the_red_dot"]:checked').val();
    var caught_the_red_dot = $('input[name="caught_the_red_dot"]:checked').val();
    var fave_toy = $('input[name="fave_toy"]:checked').val();
    var img = $('.img').val();
    var userID = ref.getAuth().uid;
    var addUser = [ null, {
      "Activities" : {
        "bark_at_nothing" : bark_at_nothing,
        "caught_the_red_dot" : caught_the_red_dot,
        "chase_cats" : chase_cats,
        "chase_the_red_dot" : chase_the_red_dot,
        "chew_shoes" : chew_shoes,
        "dig_holes" : dig_holes,
        "dig_through_trash" : dig_through_trash,
        "play_ball" : play_ball,
        "roll_in_filth" : roll_in_filth,
        "sniff_around" : sniff_around,
        "tug_of_war" : tug_of_war
      },
      "ICan" : {
        "fetch" : fetch,
        "get_paper" : get_paper,
        "get_slippers" : get_slippers,
        "play_dead" : play_dead,
        "roll_over" : roll_over,
        "shake" : shake,
        "speak" : speak
      },
      "age" : age,
      "bio" : bio,
      "breed" : breed,
      "email" : email,
      "fave_toy": fave_toy,
      "fave_snack": fave_snack,
      "gender" : gender,
      "img" : img,
      "mating_preference" : {
        "neutered" : neutered,
        "puppies" : puppies
      },
      "name" : name,
      "uid" : userID
    } ];
    

    $(document).ready(function(){
      $.ajax({
        url: "https://dog-dates.firebaseio.com/.json",
        method: "POST",
        data: JSON.stringify(addUser)
      }).done(function(addUser) {
        console.log(addUser);
      });
    });
  });
});
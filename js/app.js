var weapons = ["sword", "spear", "bomb"];

var soldier = {
  name: "nicolas",
  age: 25,
  korean: false,
  weapon: weapons[2],
  sayHi: function(name){
    alert("Hello " + name);
  }
};

var age = prompt("How old are you?");

if (age < 18){
  console.log("young");
} else if(age > 18 && age < 50){
  console.log("you are father");
}else if(age > 50 && age < 100){
  console.log("you are grandpa");
}else {
  console.log("grandpa grandpa");
}

function mul(one, two){
  return one * two;
}

function div(one, two){
  return one / two;
}

function add(one, two){
  return one + two;
}

function sub(one, two){
  return one - two;
}

/*$(document).ready(function(){
    console.log("i'm loaded")
});

$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function () {
    console.log("i got clicked");
  });
});

$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function () {
    $(this).toggleClass("fa-heart-o heart-pumping fa-heart");
  });
});*/

$(document).ready(function() {
  var $heart = $(".heart"),
    $ellipsis = $(".fa-ellipsis-h"),
    $overlay = $(".overlay");
  $heart.click(function() {
    $(this).toggleClass("fa-heart-o heart-pumping fa-heart");
  });

  $ellipsis.click(function() {
    $overlay.fadeIn(1000);
  });

  //fadeOut
});

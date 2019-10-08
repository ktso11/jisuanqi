console.log("hello world");

$(document).ready(function(){
  var word = "letter";

  for(i=0; i<word.length; i++){
    $(".numChances").append("<b class='" + word[i] + "'> _ </b> " );
  };

  var alpahabet = "abcdefghijklmopqrstuvwxyz";


//append num of letters
  for(j=0; j<alpahabet.length; j++){
    $(".alpahabet").append("<button class='" + alpahabet[j] + "'>" + alpahabet[j] + " </button>");
  }

//restart button
  var resetGame = $( ".tryAgain" ).on( "click", function() {
    location.reload()
  })

//on click check if the selected letter match
  var count = 6
  $( ".alpahabet button" ).on( "click", function() {
    var pressButton = $(this).attr('class');
    if($(".numChances b").hasClass(pressButton) && count > 0){
      $("."+pressButton).html(pressButton);
      console.log(count)
    } if($(".numChances b").hasClass(pressButton)=== false){
      count --;
      console.log("not a match " +count)
    } if(count === 0){
      console.log("end of game")
      $(".alpahabet").attr('id', 'hide');
      $(".gameover").attr('id', 'show')
      $(".tryAgain").attr('id', 'show')
    }
  });


});

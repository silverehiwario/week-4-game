
$(document).ready(function() {

   // computer generate a new random number between 19 and 120.

   var computer = Math.floor(Math.random() * 101+ 19);

   // ... and then dump the random number into our random-number div.
   var targetNumber = $("#score").html(computer);


    var wins = 0;
    var losses = 0;
    var counter =0;
    var totalScore = $("#score2").html(counter);

    // updating the wins and losses 
    var updateWins = $("#wins").html("Wins:" + wins);
    var updateLosses = $("#losses").html("Losses:" + losses);
    var updateScore = function(){
      $("#score2").html(counter);
    };

  // Generating random numbers for each crystal
    
      var random1 = Math.floor(Math.random() * 12) + 1;
      var random2 = Math.floor(Math.random() * 12) + 1;
      var random3 = Math.floor(Math.random() * 12) + 1;
      var random4 = Math.floor(Math.random() * 12) + 1;


      
     // reset button

      var reset = function(){
       
       counter =0;
       updateScore();
       
      computer = Math.floor(Math.random() * 101+ 19);
      targetNumber = $("#score").html(computer);

      random1 = Math.floor(Math.random() * 12) + 1;
      random2 = Math.floor(Math.random() * 12) + 1;
      random3 = Math.floor(Math.random() * 12) + 1;
      random4 = Math.floor(Math.random() * 12) + 1;



      };




       // This time, our click event applies to every single crystal on the page. Not just one.
     $("#random-button1").on("click", function() {
       counter += random1;
      updateScore();
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    if (counter === computer) {
      wins++;
     $("#yellow").html("you win!!!");
     $("#wins").html("Wins:" + wins);
       reset();

    }
    else if (counter >= computer) {
      losses++;
       $("#yellow").html("you lose!!!");
     $("#losses").html("Losses:" + losses);
        reset();

    }
   });


$("#random-button2").on("click", function() {
       counter += random2;
      updateScore();
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    if (counter === computer) {
      wins++;
     $("#yellow").html("you win!!!");
     $("#wins").html("Wins:" + wins);
      reset();

    }
    else if (counter >= computer) {
      losses++;
       $("#yellow").html("you lose!!!");
     $("#losses").html("Losses:" + losses);
    reset();

    }
   });

$("#random-button3").on("click", function() {
       counter += random3;
      updateScore();
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    if (counter === computer) {
      wins++;
     $("#yellow").html("you win!!!");
     $("#wins").html("Wins:" + wins);
      reset();

    }
    else if (counter >= computer) {
      losses++;
       $("#yellow").html("you lose!!!");
     $("#losses").html("Losses:" + losses);
     reset();

    }
   });

 $("#random-button4").on("click", function() {
       counter += random4;
      updateScore();
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    if (counter === computer) {
      wins++;
     $("#yellow").html("you win!!!");
     $("#wins").html("Wins:" + wins);
     reset();

    }
    else if (counter >= computer) {
      losses++;
       $("#yellow").html("you lose!!!");
     $("#losses").html("Losses:" + losses);
     reset();

    }
   });

});


 






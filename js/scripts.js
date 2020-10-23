//all them button things

$(document).ready(function() {
  $("form#quizs").submit(function(event) {
    
     
    const color = parseInt($("select#color").val());
    const candies = parseInt($("select#candies").val());
    const parks = parseInt($("select#parks").val());
    const location = parseInt($("select#location").val());
    const animals = parseInt($("select#animals").val());
    total = candies + parks + location + animals;

    //else and ifs

  if (color === 1 && total > 10) {
    $("#htmls").show();
    $("#javas, #csharp").hide();

  } else if (color === 2 && total > 10) {
    $("#csharp").show();
    $("#javas, #htmls").hide();

  } else if (color === 3 && total > 10){
    $("#javas").show();
    $("#csharp, #htmls").hide(); 
    
    }
event.preventDefault() 
  })

})

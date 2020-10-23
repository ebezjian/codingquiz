//all them button things

$(document).ready(function() {
  $("form#quizs").submit(function(event) {

    const color = parseInt($("select#color").val());
    const candies = parseInt($("candies").val());
    const parks = parseInt($("parks").val());
    const location = parseInt($("locations").val());
    const animals = parseInt($("locations").val());
    total = candies + parks + location + animals;

    //else and ifs

  if (color === 1 && total > 20) {
    $("#htmls").show();
    $("#javas, #csharp").hide();

  } else if (color === 2 && total > 20) {
    $("#csharp").show();
    $("#javas, #htmls").hide();

  } else if (color === 3 && total > 20){
    $("#javascript").show();
    $("#csharp, #htmls").hide(); 
    event.preventDefault() 
  };
  
  })})

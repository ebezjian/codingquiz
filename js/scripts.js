//all them button things

$(document).ready(function() {
  $("form#quizs").submit(function(event) {
      event.preventDefault()
    const color = parseInt($("select#color").val());
    const candies = parseInt($("candies").val());
    const parks = parseInt($("parks").val());
    const location = parseInt($("locations").val());
    const animals = parseInt($("locations").val());
    const result = candies + parks + location + animals;

    //else and ifs

  if (color === 5 && result >= 20) {
    $("#htmls").show();
    $("#javascript, #csharp").hide();

  } else if (color === 10 && result >= 20) {
    $("#csharp").show();
    $("#javascript, #htmls").hide();

  } else (color === 15 && result >= 20);
    $("#javascript").show();
    $("#csharp, #htmls").hide();
  });
});

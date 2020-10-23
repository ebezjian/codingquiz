//all them button things

$(document).ready(function() {
  $("form#quizs").submit(function(event) {
    event.preventDefault()
    const color = parseInt($("input:radio[name=color]:checked").val());
    const candies = parseInt($("input:radio[name=candies]:checked").val());
    const parks = parseInt($("input:radio[name=parks]:checked").val());
    const location = parseInt($("input:radio[name=location]:checked").val());
    const animals = parseInt($("input:radio[name=animals]:checked").val());
    const result = candies + parks + location + animals;

    //else and ifs

  if (color === 5 && result >= 20) {
    $("#htmls").show();
    $("#javascript, #csharp").hide();

  } else if (color === 10 && result >= 20) {
    $("#csharp").show();
    $("#javascript, #html").hide();

  } else (color === 15 && result >= 20)  
    $("#javascript").show();
    $("#csharp, #html").hide();

  });
});


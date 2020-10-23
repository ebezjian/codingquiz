//all them button things

$(document).ready(function() {
  $("form#quizs").submit(function(event) {
    event.preventDefault()
    const colors = parsInt$("input:radio[name=colors]:checked").val();
    const candies = parsInt$("input:radio[name=candies]:checked").val();
    const parks = parsInt$("input:radio[name=parks]:checked").val();
    const location = parsInt$("input:radio[name=location]:checked").val();
    const animals = parsInt$("input:radio[name=animals]:checked").val();
    

    //else and ifs

  if (colors === 5) {
    
    $("#htmls").show();
    $("#javascript, #csharp").hide();

  } else if (colors === 10) {

    $("#csharp").show();
    $("#javascript, #html").hide();

  } else (colors ==== 15)  
    
    $("#javascript").show();
    $("#csharp, #html").hide();

  });
});


//all them button things
$(document).ready(function() {
  ("form#quiz").submit(function(event) {
    
    const colors = parsInt$("input:radio[name=colors]:checked").val();
    const candies = parsInt$("input:radio[name=candies]:checked").val();
    const parks = parsInt$("input:radio[name=parks]:checked").val();
    const location = parsInt$("input:radio[name=location]:checked").val();
    const animals = parsInt$("input:radio[name=animals]:checked").val();
    const result= colors + candies + parks + location + animals;

    //else and ifs

  if (result <= 10) {
    
    $("#html").show();
    $("#javascript, #csharp").hide();

  } else if (result === 20) {

    $("#csharp").show();
    $("#javascript, #html").hide();

  } else (result === 25)  {
    
    $("#javascript").show();
    $("#csharp, #html").hide();
  }  
  event.preventDefault()

  })
})

//all them button things
$(document).ready(function() {
  ("form#quiz").submit(function(event) {
    
    const firstQuestion = $("input:radio[name=firstQuestion]:checked").val();
    const secondQuestion = $("input:radio[name=secondQuestion]:checked").val();
    const thirdQuestion = $("input:radio[name=thirdQuestion]:checked").val();
    const fourthQuestion = $("input:radio[name=fourthQuestion]:checked").val();
    const fifthQuestion = $("input:radio[name=fifthQuestion]:checked").val();


    //else and ifs

  if (firstQuestion === neutrals &&
      secondQuestion === chocolate &&
      thirdQuestion === donna &&
      fourthQuestion === chicago &&
      fifthQuestion === cat) {
    
    $("#html").show();
    $("#javascript, #csharp").hide();

  } else if (firstQuestion === pastel &&
    secondQuestion === chocolate &&
    thirdQuestion === donna &&
    fourthQuestion === chicago &&
    fifthQuestion === cat) {

    $("#csharp").show();
    $("#javascript, #html").hide();

  } else (firstQuestion === primary &&
    secondQuestion === chocolate &&
    thirdQuestion === donna &&
    fourthQuestion === chicago &&
    fifthQuestion === cat) ;
    
    $("#javascript").show();
    $("#csharp, #html").hide();
  event.preventDefault()
  })
  
})

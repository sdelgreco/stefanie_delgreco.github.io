// As a user
// When I change my selection
$("select").change(changeBackgroundimage);

function changeBackgroundimage () { console.log("click")
  var userSelection = $("#city-type").val();
  if ($("body").hasClass("nyc") || $("body").hasClass('sf') || $("body").hasClass('la') || $("body").hasClass('atx') || $("body").hasClass('syd') ){$("body").removeClass()
}
  $("body").addClass(userSelection)
}

 // I expect the backgrou image to change into the image of my selection

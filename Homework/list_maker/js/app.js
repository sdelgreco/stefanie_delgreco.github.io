// As a user
// When I enter an item in the input and click the button
// I expect to see a new item in the list
$("#append").click(function () {
  var text = $("#text").val();
  var output = "list" + text;

  $("#text").append(output);

  $("#text").val("");
}


// As a user
// Once I have added an item to the list
// I expect the input to be empty
$("#remove").click(function () {
  $("p").remove();

function getOutput() {
    var text = $("#text").val();
    
    $("#text").val("");
    
    return "<p>" + text +"</p>";
  }
});
// Bonus:

// As a user
// Once I have added an item to the list
// I expect the prompt to be focused on the input

// Harder Bonus:

// As a user
// When I try to add a blank item
// I expect to see an alert telling me to add an item

// Legendary Bonus:

// As a user
// When I click on an item I have already added
// I expect it to be removed from the list
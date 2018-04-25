// As a user
// When I click on the row
// I expect to see the text appear underneath

// As a user
// When I click on an opened row
// I expect to see the text disappear

// It should animate like this: https://imgur.com/ivlcesG

// Hint: remember traversal (parent, child) and event arguments
// Also, might be worth looking into event.target vs. event.currentTarget

// Extra Credit:
// 
// As a user
// When I click on an opened row
// I expect the text to disappear more slowly than how it appeared

$(".row".click(toggle)

  function toggle(event) {
   var wrapper = $(event.currentTarget).find(".wrapper").show();

   if(wrapper.is(":visible")) {
    wrapper.slideUp("slow");
  } else {
  wrapper.slideUp("slow");
   }
   wrapper.slideDown("fast");
  }


// extra credit:

// $(".row").click(function(event) {
//   var wrapper = $(event.currentTarget).find(".wrapper");

//   if(wrapper.is(":visible")) {
//     wrapper.slideUp("slow");
//   } else {
//     wrapper.slideDown("fast");
//   }
// });
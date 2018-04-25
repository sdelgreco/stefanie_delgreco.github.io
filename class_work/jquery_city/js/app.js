// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
$(".thumb").click(changeImage);

// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
function changeImage(event) {
  // I have the element
  // $()
  var newSrc = $(event.currentTarget).attr("src");
$("#bigimage").attr("src", newSrc);
}

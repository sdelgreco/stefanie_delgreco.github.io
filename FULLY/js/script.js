const form = document.getElementById('nl-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const select = document.getElementById('select');
  var existingUrl = document.location.href;
  var newUrl = existingUrl.replace(/\/[a-z-]+\.html/, select.value);
  
  document.location.href = newUrl;
});
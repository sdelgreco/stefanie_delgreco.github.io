const form = document.getElementById('nl-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const select = document.getElementById('select');
  document.location.href = document.location.href.replace(/\/[a-z-]+\.html/, select.value);
});
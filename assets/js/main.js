$( document ).ready(function() {
// start here  

$('.popup-link').click(function() {
  $('.popup').addClass('active');
});

$('.popup').click(function() {
  $('.popup').removeClass('active');
});

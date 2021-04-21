$( document ).ready(function() {
// start here  

$('.popup-link').click(function() {
  $('.popup').addClass('active');
});

$('.popup').click(function() {
  $('.popup').removeClass('active');
});


function isMobile() {
  $deviceList = array(
    '/iphone/i' => 'iPhone', 
    '/ipod/i' => 'iPod', 
    '/ipad/i' => 'iPad', 
    '/android/i' => 'Android'
  );

  foreach($deviceList as $deviceKey => $deviceOS) {
    if(preg_match($deviceKey, $_SERVER['HTTP_USER_AGENT'])) {
        // echo your content for mobile devices
    }
  }
}
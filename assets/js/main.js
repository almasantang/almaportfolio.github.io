    var videoWidth = 1280;
    var  video = $(".video-container video").attr("srcdesk");
    if($(window).width() < 721) {
      videoWidth = 720;
      video = $(".video-container video").attr("srcmob"));
    }
    $(".video-container video").attr("width", videoWidth).append('<source src="' + video + '" type="video/mp4" >'),
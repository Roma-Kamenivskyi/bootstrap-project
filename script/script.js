$(window).on('load', function(){
   $('#preloader').delay(500).fadeOut();
});


$(function(){
    baguetteBox.run('.gallery');


    $(window).on('scroll', function(){
        if($(this).scrollTop() > 700) {
            $('#scrollToTop').fadeIn();
        }
        else {
            $('#scrollToTop').fadeOut();
        }
    });

    $('#scrollToTop').on('click', function(){
        $('body, html').animate({scrollTop: 0}, 800);
        return false;
    });

    var btnPlayVideo = $('#btnPlayVideo'),
    videoWrapper = $('.video-wrapper');

    btnPlayVideo.on('click', function(){
        $("#video").trigger('play');
        videoWrapper.css({"display": "flex", "justify-content": "center", "align-items:": "center"});
        console.log(video);

        // video.trigger('play');
    });

    function stopVideo(id) {
        $('#' + id).attr('src', $('#' + id).attr('src'));
    
    }

    $('.close-video').on('click', function(){
        stopVideo('video');
        videoWrapper.css('display', 'none');
    });
});




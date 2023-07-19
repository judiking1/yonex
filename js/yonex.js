/* Video 제어 스크립트 */
$('.doBtn').click(function () {
    const video = $('.video').get(0);
    if (video.paused) {
        video.play();
        $('.doBtn').html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    } else {
        video.pause();
        $('.doBtn').html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});

$('.vid button').eq(1).click(function () {
    $('video').get(0).load();
});

$('.video').prop('muted', true);

$('.soundBtn').click(function () {
    const video = $('.video');
    if (video.prop('muted')) {
        video.prop('muted', false);
        $('.soundBtn').html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
    } else {
        video.prop('muted', true);
        $('.soundBtn').html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
    }
});



















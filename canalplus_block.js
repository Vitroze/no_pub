function get_video() {
    const video = document.querySelector('div[data-testid="videoCore"] video');
    return video;
}

function bypass_pub() {
    const video = get_video();
    if (video) {
        video.play();
        video.currentTime = video.duration - 1;
    }
}

function get_pub() {

}
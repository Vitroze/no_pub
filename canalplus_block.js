function get_pub() { return document.querySelector('span[data-testid="remainingTimeAd"]') != null; }
function is_valid_video(video) { return video != null && Number.isFinite(video.duration) && video.duration > 0; }

function set_video_time(video, time) {
    video.currentTime = time;
    video.play();
    console.log("Bypass pub");
}

function bypass_pub() {
    const video = document.querySelector("video");
    if (is_valid_video(video)) {
        set_video_time(video, video.duration - 1);
    } else if (video != null) {
        video.addEventListener('loadedmetadata', () => {
            if (is_valid_video(video)) {
                set_video_time(video, video.duration - 1);
            }
        }, { once: true });
    }
}

const observer = new MutationObserver((_) => {
    if (get_pub()) { bypass_pub(); }
});

if (get_pub()) { bypass_pub(); }

observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-testid'] });

console.log("Canal+ pub bypasser loaded");
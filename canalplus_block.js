function get_url() {
    return window.location.hostname.toLowerCase();
}

function get_pub() {
    const base_url = get_url();
    if (base_url.includes("canalplus.com")) {
        return document.querySelector('span[data-testid="remainingTimeAd"]') != null;
    } else if (base_url.includes("youtube.com")) {
        return document.querySelector('.ytp-ad-player-overlay-layout__ad-info-container') != null;
    }

    return false;
}

function play_video(video) {
    const base_url = get_url();
    if (base_url.includes("youtube.com")) {
        const play_button = document.querySelector('.ytp-large-play-button ytp-button');
        if (play_button != null) {
            play_button.click();
        }
    } else {
        video.play();
    }
}

function is_valid_video(video) { return video != null && Number.isFinite(video.duration) && video.duration > 0; }

let cooldown = false;
function set_video_time(video, time) {
    if (cooldown) { return; }
    cooldown = true; setTimeout(() => { cooldown = false; }, 100);

    video.currentTime = time;
    play_video(video);
    console.log("Bypass pub");
}

function bypass_pub() {
    const video = document.querySelector("video");
    if (is_valid_video(video)) {
        set_video_time(video, video.duration - 0.1);
    } else if (video != null) {
        video.addEventListener('loadedmetadata', () => {
            if (is_valid_video(video)) {
                set_video_time(video, video.duration - 0.1);
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
function get_video() {
    const video = document.querySelector("video");
    return video;
}

function is_valid_video(video) {
    return video != null && Number.isFinite(video.duration) && video.duration > 0;
}

function bypass_pub() {
    const video = get_video();
    if (video) {
        if (is_valid_video(video)) {
            video.currentTime = video.duration - 1;
            video.play();
            console.log("Bypass pub");
        } else {
            video.addEventListener('loadedmetadata', () => {
                if (is_valid_video(video)) {
                    video.currentTime = video.duration - 1;
                    video.play();
                    console.log("Bypass pub");
                }
            }, { once: true });
        }
    }
}

function get_pub() {
    const btn = document.querySelector('span[data-testid="remainingTimeAd"]');
    return btn != null;
}

const observer = new MutationObserver((mutations) => {
    if (get_pub()) {
        bypass_pub();
    }
});

if (get_pub()) {
    bypass_pub();
}

observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-testid'] });

console.log("Canal+ pub bypasser loaded");
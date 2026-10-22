# No Pub

`No Pub` is a browser extension that automatically skips advertisements on
Canal+ and myCanal and YouTube.

The extension runs on Canal+ pages and detects video advertisements. When an
advertisement is detected, it moves the video close to the end and starts
playback automatically.

## Supported websites

The extension runs on:

- `*.canalplus.com`
- `*.youtube.com`

## Quick installation

### Chrome / Edge

1. Open your browser.
2. Go to `chrome://extensions` or `edge://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the `no_pub` project folder.
6. The extension will appear in your browser.

### Firefox

1. Open Firefox.
2. Go to `about:addons`.
3. Select the **Extensions** tab.
4. Enable **Developer mode**.
5. Click **Load Temporary Add-on**.
6. Select the `manifest.json` file from the `no_pub` project folder.
7. The extension will be installed temporarily for testing.

## Usage

Once installed:

1. Open Canal+ or myCanal or YouTube in your browser.
2. Start watching a video.
3. The extension automatically detects and skips advertisements.

No additional configuration is required.

## Project structure

```text
no_pub/
├── canalplus_block.js
├── manifest.json
└── README.md
```
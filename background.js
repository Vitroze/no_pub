const ORIGINS = ["*://*.canalplus.com/*", "*://*.youtube.com/*"];

async function check() {
  const ok = await browser.permissions.contains({ origins: ORIGINS });
  browser.action.setBadgeText({ text: ok ? "" : "!" });
  browser.action.setBadgeBackgroundColor({ color: "#d00" });
  return ok;
}

browser.runtime.onInstalled.addListener(async () => {
  if (await check()) return;
  const { installType } = await browser.management.getSelf();
  if (installType === "development") {
    browser.action.openPopup().catch(() => {});
  }
});

browser.runtime.onStartup.addListener(check);
browser.permissions.onAdded.addListener(check);
browser.permissions.onRemoved.addListener(check);
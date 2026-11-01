const ORIGINS = ["*://*.canalplus.com/*", "*://*.youtube.com/*"];
const msg = document.getElementById("msg");
const btn = document.getElementById("ok");

function done() {
  msg.textContent = "Autorisé. Recharge tes onglets.";
  btn.hidden = true;
}

browser.permissions.contains({ origins: ORIGINS }).then((ok) => ok && done());

btn.onclick = () => {
  browser.permissions.request({ origins: ORIGINS });
  window.close();
};
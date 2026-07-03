const button = document.getElementById("enterButton");
const portal = document.getElementById("portal");
const statusText = document.getElementById("status");
const portalSound = document.getElementById("portalSound");

button.addEventListener("click", () => {
  portal.classList.add("opening");
  button.disabled = true;
  statusText.textContent = "opening portal...";

  // Tiny delay before the FM sweep, so the portal feels like it is engaging.
  setTimeout(() => {
    portalSound.currentTime = 0;
    portalSound.volume = 0.9;
    portalSound.play().catch(() => {
      // If a browser blocks audio for any reason, the portal still works.
    });
  }, 80);

  // Start the PDF download shortly after the sound begins.
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "assets/CourtieDupain_EaseEatWhatTities.pdf";
    link.download = "CourtieDupain_EaseEatWhatTities.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, 650);

  setTimeout(() => {
    portal.classList.remove("opening");
    portal.classList.add("opened");
    statusText.textContent = "portal opened";
  }, 1650);
});

const button = document.getElementById("enterButton");
const portal = document.getElementById("portal");
const statusText = document.getElementById("status");

button.addEventListener("click", () => {
  portal.classList.add("opening");
  button.disabled = true;
  statusText.textContent = "opening portal...";

  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "assets/CourtieDupain_EaseEatWhatTities.pdf";
    link.download = "CourtieDupain_EaseEatWhatTities.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, 950);

  setTimeout(() => {
    portal.classList.remove("opening");
    portal.classList.add("opened");
    statusText.textContent = "portal opened";
  }, 1650);
});

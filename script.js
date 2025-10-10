////////////////////////////////////////////////////////////

// Add to popup.js
function openPopup(event) {
  document.getElementById("popupOverlay").classList.add("show");
  // Remove attention class after first interaction
  const contactBtn = document.querySelector(".contact-button");
  contactBtn.classList.remove("attention");
}

function closePopup(event) {
  document.getElementById("popupOverlay").classList.remove("show");
}

// Optional: Re-add attention animation if popup hasn't been opened after X seconds
// s

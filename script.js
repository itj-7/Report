document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      window.location.href = "yes.html";
    });
  }

  if (noBtn) {
    noBtn.addEventListener("click", () => {
      window.location.href = "no.html";  
    });
  }
});

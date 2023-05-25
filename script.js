document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll(".progress-bar");
  
  progressBars.forEach(function(progressBar) {
    const progress = progressBar.getAttribute("data-progress");
    progressBar.style.animation = `progress-bar ${progress} linear forwards`;
  });
});
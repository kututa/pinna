// Show/hide the top scroll button based on the user's scroll position
window.onscroll = function() {
    var button = document.getElementById("top-scroll-button");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  
  // Scroll to the top of the page when the user clicks the button
  document.getElementById("top-scroll-button").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.classList.add("active");
    setTimeout(() => {
      this.classList.remove("active");
    }, 1000);
  });
  
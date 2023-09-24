// WEB303 Assignment 2


document.addEventListener("DOMContentLoaded", function () {
    var contentDiv = document.getElementById("content");
  
    // Function to load content and animate it
    function loadContentAndAnimate(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          // Content loaded successfully
          contentDiv.style.opacity = "0"; // Hide the content div
          contentDiv.innerHTML = xhr.responseText; // Set new content
  
          // Animate the content div (you can choose your animation here)
          contentDiv.style.transition = "opacity 0.5s ease";
          contentDiv.style.opacity = "1";
        }
      };
  
      xhr.send();
    }
  
    // Click event listeners for the links
    var prospectLink = document.getElementById("prospect");
    var convertLink = document.getElementById("convert");
    var retainLink = document.getElementById("retain");
  
    prospectLink.addEventListener("click", function (e) {
      e.preventDefault();
      loadContentAndAnimate("prospect.html");
    });
  
    convertLink.addEventListener("click", function (e) {
      e.preventDefault();
      loadContentAndAnimate("convert.html");
    });
  
    retainLink.addEventListener("click", function (e) {
      e.preventDefault();
      loadContentAndAnimate("retain.html");
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", navigateToPage);
  });

  function navigateToPage(e) {
    e.preventDefault();

    const pageURL = this.getAttribute("href");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", pageURL, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const responseHTML = xhr.responseText;
        const parser = new DOMParser();
        const newDocument = parser.parseFromString(responseHTML, "text/html");

        document.documentElement.innerHTML = newDocument.documentElement.innerHTML;
        history.pushState({}, "", pageURL);

        // Run scripts after loading the new content
        const scripts = document.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; i++) {
          eval(scripts[i].text);
        }
      }
    };
    xhr.send();
  }
});
document.addEventListener("click", (e) => {
    if (e.target.matches(".plus")) {
      isDropdown = true;
      e.target.classList.toggle("active");
      e.target.classList.toggle("rotate");
    } else if (e.target.matches(".question h4")) {
      e.target.nextElementSibling.classList.toggle("active");
      e.target.nextElementSibling.classList.toggle("rotate");
    }
  });
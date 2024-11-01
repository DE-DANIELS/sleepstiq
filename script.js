// Toggle navigation menu on mobile screens
const openMenu = document.querySelector(".burger");
const closeMenu = document.querySelector(".fa-xmark");
const dropMenu = document.querySelector(".N-mobile");
const myHeader = document.querySelector(".my_header");

openMenu.addEventListener("click", function() {
    dropMenu.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    myHeader.style.backgroundColor = "rgb(255, 255, 255)";
})

closeMenu.addEventListener("click", function() {
    dropMenu.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    myHeader.style.backgroundColor = "transparent";
})
  // Accordion functionality
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle the display of the associated content
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // Toggle the active class for the button
    this.classList.toggle("active");
  });
});
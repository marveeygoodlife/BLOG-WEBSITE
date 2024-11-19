// toggle function to display the nav on Mobile device when user click on the nav bar button.
document.addEventListener("DOMContentLoaded", () => {
const toggleMenu = document.querySelector(".toggle-nav");
const menuNav = document.querySelector("#navBar");
toggleMenu.addEventListener("click", () =>{
    menuNav.classList.toggle("open")
})
})
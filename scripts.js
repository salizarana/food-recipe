let menuIcon = document.querySelector("#menu-icon");

menuIcon.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

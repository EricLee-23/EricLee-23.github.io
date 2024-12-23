function toggleLDMode() {

    document.getElementById("checkbox").addEventListener("change", function() {
        const image = document.getElementById("slider-image");
        if (this.checked) { // lightmode
            image.src = "/images/lightmode.svg"; 
        } else {
            image.src = "/images/darkmode.svg"; 
        }
    });

    let body = document.body;
    body.classList.toggle("lightmode");
    if (body.classList.contains("lightmode")) {
        document.getElementById("subMenu_icon").src = "/images/darkmenu.svg"
    }
    else {
        document.getElementById("subMenu_icon").src = "/images/lightmenu.svg"
    }
}

function toggleMenu() {
    let subMenu = document.getElementById("subMenu");
    if (subMenu.style.height == "0px") {
        subMenu.style.height = "150px";
    }
    else {
        subMenu.style.height = "0px";
    }
}

function checkWindowWidth() {
    let icon = document.getElementById("subMenu_icon");
    let outerMenu = document.getElementById("outerMenu");
    if (window.innerWidth <= 600) {
        icon.style.display = "block";  // Show the icon
        outerMenu.style.display = "none";
    } else {
        icon.style.display = "none";  // Hide the icon
        outerMenu.style.display = "block";
        subMenu.style.height = "0px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkWindowWidth();  // Run the check after the DOM is loaded
    window.addEventListener("resize", checkWindowWidth);  // Recheck on resize
});
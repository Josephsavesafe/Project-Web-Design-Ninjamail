var navbar = document.getElementById("navbar");

navbar.style.maxHeight = "0rem"

function toggle() {
    if (navbar.style.maxHeight == "0rem") {
        navbar.style.maxHeight = "30rem"
    } else {
        navbar.style.maxHeight = "0rem"
    }
}
const menuButton = document.querySelector(".fa-solid");
const menuLateral = document.querySelector(".menu-lateral");
var showing = false;

menuButton.addEventListener("click", () => {
    showing = !showing;
    if (showing) {
        menuButton.classList.remove("fa-bars");
        menuButton.classList.add("fa-xmark");
    } else {
        menuButton.classList.remove("fa-xmark");
        menuButton.classList.add("fa-bars");
    }

    menuLateral.classList.toggle("showing");
});

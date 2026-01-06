import home from "./pages/home.js";
import about from "./pages/about.js";
import contact from "./pages/contact.js";
import menu from "./pages/menu.js";

const d = document;

const homeButton = d.querySelector(".home-button");
const menuButton = d.querySelector(".menu-button");
const aboutButton = d.querySelector(".about-button");
const contactButton = d.querySelector(".contact-button");

function clearContent() {
    content.replaceChildren();
}

homeButton.addEventListener("click", (e) => {
    clearContent();
    home(content);
});

menuButton.addEventListener("click", (e) => {
    clearContent();
    menu(content);
});

aboutButton.addEventListener("click", (e) => {
    clearContent();
    about(content);
});

contactButton.addEventListener("click", (e) => {
    clearContent();
    contact(content);
});

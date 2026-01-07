import home from "./pages/home.js";
import contact from "./pages/contact.js";
import menu from "./pages/menu.js";

const d = document;

const pageTitle = d.querySelector("#pageHeader .title");

const homeButton = d.querySelector(".home-button");
const menuButton = d.querySelector(".menu-button");
const aboutButton = d.querySelector(".about-button");
const contactButton = d.querySelector(".contact-button");

function clearContent() {
    content.replaceChildren();
}

homeButton.addEventListener("click", (e) => {
    pageTitle.textContent = "Home";
    clearContent();
    home(content);
});

menuButton.addEventListener("click", (e) => {
    pageTitle.textContent = "Our Menu";
    clearContent();
    menu(content);
});

contactButton.addEventListener("click", (e) => {
    pageTitle.textContent = "Contact Us";
    clearContent();
    contact(content);
});

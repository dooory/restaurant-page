import home from "./pages/home.js";
import contact from "./pages/contact.js";
import menu from "./pages/menu.js";

const d = document;

const pageTitle = d.querySelector("#pageHeader .title");

const homeButton = d.querySelector(".home-button");
const menuButton = d.querySelector(".menu-button");
const aboutButton = d.querySelector(".about-button");
const contactButton = d.querySelector(".contact-button");

let currentPage = "home";

pageTitle.textContent = "Home";
home(content);

function clearContent() {
    content.replaceChildren();
}

homeButton.addEventListener("click", (e) => {
    currentPage = "home";

    pageTitle.textContent = "Home";
    clearContent();
    home(content);
});

menuButton.addEventListener("click", (e) => {
    currentPage = "menu";

    pageTitle.textContent = "Our Menu";
    clearContent();
    menu(content);
});

contactButton.addEventListener("click", (e) => {
    currentPage = "contact";

    pageTitle.textContent = "Contact Us";
    clearContent();
    contact(content);
});

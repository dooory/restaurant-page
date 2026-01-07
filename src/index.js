import home from "./pages/home.js";
import contact from "./pages/contact.js";
import menu from "./pages/menu.js";
import "./style/main.css";

const d = document;

const pageTitle = d.querySelector("#pageHeader .title");

const homeButton = d.querySelector(".home-button");
const menuButton = d.querySelector(".menu-button");
const aboutButton = d.querySelector(".about-button");
const contactButton = d.querySelector(".contact-button");

let currentPage = "home";

pageTitle.textContent = "Porker Restaurant";
home(content);

function clearContent() {
    const selectedButtons = document.querySelectorAll(".selected");

    for (let i = 0; i < selectedButtons.length; i++) {
        const button = selectedButtons[i];

        button.classList.remove("selected");
    }

    content.replaceChildren();
}

homeButton.addEventListener("click", (e) => {
    currentPage = "home";

    pageTitle.textContent = "Porker Restaurant";
    clearContent();
    homeButton.classList.add("selected");
    home(content);
});

menuButton.addEventListener("click", (e) => {
    currentPage = "menu";

    pageTitle.textContent = "Our Menu";
    clearContent();
    menuButton.classList.add("selected");
    menu(content);
});

contactButton.addEventListener("click", (e) => {
    currentPage = "contact";

    pageTitle.textContent = "Contact Us";
    clearContent();
    contactButton.classList.add("selected");
    contact(content);
});

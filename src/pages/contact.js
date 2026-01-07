const d = document;

const details = {
    phone: "222-222-444",
    email: "our.restaurant@easymail.com",
};

export default function contactPage(content) {
    const page = d.createElement("div");
    page.classList.add("contact-page");

    const container = d.createElement("div");
    container.classList.add("contact-container");

    const phoneText = d.createElement("p");
    phoneText.textContent = `Phone: ${details.phone}`;

    const emailText = d.createElement("p");
    emailText.textContent = `Email: ${details.email}`;

    container.append(phoneText);
    container.append(emailText);
    page.append(container);
    content.append(page);
}

const d = document;

export default function contactPage(content) {
    const contactPageDiv = d.createElement("div");
    contactPageDiv.classList.add("contact-page");

    content.append(contactPageDiv);
}

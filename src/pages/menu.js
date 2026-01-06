const d = document;

export default function menuPage(content) {
    const menuPageDiv = d.createElement("div");
    menuPageDiv.classList.add("menu-page");

    content.append(menuPageDiv);
}

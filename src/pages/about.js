const d = document;

export default function aboutPage(content) {
    const aboutPageDiv = d.createElement("div");
    aboutPageDiv.classList.add("about-page");

    content.append(aboutPageDiv);
}

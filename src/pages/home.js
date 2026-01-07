const d = document;

export default function homepage(content) {
    const homepageDiv = d.createElement("div");
    homepageDiv.classList.add("home-page");

    content.append(homepageDiv);

    const [descriptionDiv, descriptionHeader, descriptionText] =
        description(homepageDiv);
}

function tagline(parentDiv) {
    const taglineDiv = d.createElement("div");
    taglineDiv.classList.add("tagline");
    parentDiv.append(taglineDiv);

    return homepageDiv;
}

function description(parentDiv) {
    const descriptionDiv = d.createElement("div");
    descriptionDiv.classList.add("description");
    parentDiv.append(descriptionDiv);

    const descriptionHeader = d.createElement("h2");
    descriptionHeader.textContent = "A break away from reality";
    descriptionDiv.append(descriptionHeader);

    const descriptionText = d.createElement("p");
    descriptionText.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi expedita consequatur obcaecati reprehenderit excepturi debitis laboriosam aspernatur distinctio rerum rem blanditiis quidem, fuga consectetur quisquam totam ex commodi eos autem modi ipsum nihil ut voluptatibus quos. Laborum in dolorem quisquam saepe, quas, molestias dolorum expedita assumenda optio, tempora nulla.";
    descriptionDiv.append(descriptionText);

    return [descriptionDiv, descriptionHeader, descriptionText];
}

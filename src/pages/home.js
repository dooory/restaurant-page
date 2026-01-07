const d = document;

const storeHours = {
    Sunday: ["8 am", "5 pm"],
    Monday: ["8 am", "6 pm"],
    Tuesday: ["8 am", "6 pm"],
    Wednesday: ["8 am", "6 pm"],
    Thursday: ["8 am", "7 pm"],
    Friday: ["8 am", "7 pm"],
    Saturday: ["8 am", "7 pm"],
};

export default function homepage(content) {
    const homepageDiv = d.createElement("div");
    homepageDiv.classList.add("home-page");

    content.append(homepageDiv);

    const [descriptionDiv, descriptionHeader, descriptionText] =
        description(homepageDiv);
    const [openingDiv, openingHeader, hoursList] = openingHours(homepageDiv);
    const [locationDiv, locationHeader, locationText] = location(homepageDiv);

    return homepageDiv;
}

function description(parentDiv) {
    const descriptionDiv = d.createElement("div");
    descriptionDiv.classList.add("description");
    parentDiv.append(descriptionDiv);

    const descriptionHeader = d.createElement("h2");
    descriptionHeader.textContent = '"A break away from reality"';
    descriptionDiv.append(descriptionHeader);

    const descriptionText = d.createElement("p");
    descriptionText.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi expedita consequatur obcaecati reprehenderit excepturi debitis laboriosam aspernatur distinctio rerum rem blanditiis quidem, fuga consectetur quisquam totam ex commodi eos autem modi ipsum nihil ut voluptatibus quos. Laborum in dolorem quisquam saepe, quas, molestias dolorum expedita assumenda optio, tempora nulla.";
    descriptionDiv.append(descriptionText);

    return [descriptionDiv, descriptionHeader, descriptionText];
}

function openingHours(parentDiv) {
    const openingDiv = d.createElement("div");
    openingDiv.classList.add("opening-hours");
    parentDiv.append(openingDiv);

    const openingHeader = d.createElement("h2");
    openingHeader.textContent = "Opening Hours";
    openingDiv.append(openingHeader);

    const hoursList = d.createElement("ul");
    openingDiv.append(hoursList);

    for (const day in storeHours) {
        const dayHours = storeHours[day];
        const dayStart = dayHours[0];
        const dayEnd = dayHours[1];

        const dayItem = d.createElement("li");
        dayItem.textContent = `${day}: ${dayStart}–${dayEnd}`;

        hoursList.append(dayItem);
    }

    return [openingDiv, openingHeader, hoursList];
}

function location(parentDiv) {
    const locationDiv = d.createElement("div");
    locationDiv.classList.add("location");
    parentDiv.append(locationDiv);

    const locationHeader = d.createElement("h2");
    locationHeader.textContent = "Our Address";
    locationDiv.append(locationHeader);

    const locationText = d.createElement("p");
    locationText.textContent = "56 Lancy Street, Porkerville";
    locationDiv.append(locationText);

    return [locationDiv, locationHeader, locationText];
}

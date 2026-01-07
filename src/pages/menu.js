const d = document;

const food = [
    {
        Name: "Burger & Fries",
        Id: 0,
        Price: 10,
        Allergens: ["Gluten", "Soy", "Dairy"],
    },
    {
        Name: "Pepperoni Pizza",
        Id: 1,
        Price: 12,
        Allergens: ["Gluten", "Soy", "Dairy"],
    },
    {
        Name: "Onion Rings",
        Id: 2,
        Price: 7,
        Allergens: ["Gluten", "Soy", "Milk", "Eggs"],
    },
];

const drinks = [
    {
        Name: "Water",
        Id: 0,
        Price: 1.0,
        Allergens: [],
    },
    {
        Name: "Coke",
        Id: 1,
        Price: 3.0,
        Allergens: [],
    },
    {
        Name: "L&P",
        Id: 2,
        Price: 3.0,
        Allergens: [],
    },
];

export default function menuPage(content) {
    const menuPageDiv = d.createElement("div");
    menuPageDiv.classList.add("menu-page");

    content.append(menuPageDiv);

    const menuContainer = d.createElement("div");
    menuContainer.classList.add("menu-container");

    menuPageDiv.append(menuContainer);

    const [foodList, foodItems] = menuList("Food", food, menuContainer);
    const [drinkList, drinkItems] = menuList("Drinks", drinks, menuContainer);

    return menuPageDiv;
}

function menuList(name, itemList, parentDiv) {
    const listContainer = d.createElement("div");
    listContainer.classList.add("menu-list", name.toLowerCase());
    parentDiv.append(listContainer);

    const listItems = [];

    for (let i = 0; i < itemList.length; i++) {
        const itemData = itemList[i];

        const itemEntry = d.createElement("li");
        itemEntry.classList.add("item-entry");

        const itemDiv = d.createElement("div");
        itemDiv.classList.add("item-div");

        const itemName = d.createElement("h3");
        itemName.textContent = `${itemData.Name}`;
        itemName.classList.add("item-name");

        const itemPrice = d.createElement("p");
        itemPrice.textContent = `$${itemData.Price}`;
        itemPrice.classList.add("item-price");

        if (itemData.Allergens.length > 0) {
            itemEntry.classList.add("allergens");
        }

        itemDiv.append(itemName);
        itemDiv.append(itemPrice);
        itemEntry.append(itemDiv);
        listContainer.append(itemEntry);

        listItems.push(itemEntry);
    }

    return [listContainer, listItems];
}

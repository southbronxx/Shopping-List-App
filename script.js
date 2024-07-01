const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

function addItem(e) {
	// Event Handler: this function here helps prevent the page from reloading everytime there's any submission
	e.preventDefault();

	// Validate input
	const newItem = itemInput.value;

	// ensuring a user adds an item
	if (newItem.value === "") {
		alert("Please add an item");
		return;
	}

	// collecting input from the user and storing the data as a list item
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(newItem));

	const button = createButton("remove-item btn-link text-red");
	li.appendChild(button);

	itemList.appendChild(li);
	itemInput = "";
}

function createButton(classes) {
	const button = document.createElement("button");
	button.className = classes;
	const icon = createIcon("fa-solid fa-plus ");
	button.appendChild(icon);
	return button;
}

function createIcon(classes) {
	const icon = document.createElement("i");
	icon.className = classes;
	return icon;
}

itemForm.addEventListener("submit", addItem);

// From line one up to this point builds on adding items to the list of items

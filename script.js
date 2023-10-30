function displayItems() {
    itemList.innerHTML = "";
    const items = JSON.parse(localStorage.getItem("items")) || [];

    items.forEach(function(item, index) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `
            <strong>Name:</strong> ${item.name} <br>
            <strong>Description:</strong> ${item.description} <br>
            <strong>Price:</strong> $${item.price} <br>
            <strong>Quantity:</strong> ${item.quantity} <br>
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
            <button onclick="buyOne(${index})">Buy One</button>
            <button onclick="buyTwo(${index})">Buy Two</button>
            <button onclick="buyThree(${index})">Buy Three</button>
        `;
        itemList.appendChild(itemDiv);
    });
}

function buyOne(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    if (items[index].quantity >= 1) {
        items[index].quantity -= 1;
        localStorage.setItem("items", JSON.stringify(items));
        displayItems();
    }
}

function buyTwo(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    if (items[index].quantity >= 2) {
        items[index].quantity -= 2;
        localStorage.setItem("items", JSON.stringify(items));
        displayItems();
    }
}

function buyThree(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    if (items[index].quantity >= 3) {
        items[index].quantity -= 3;
        localStorage.setItem("items", JSON.stringify(items));
        displayItems();
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const data = axios.put("https://crudcrud.com/api/41fb4a53bec341e28e3332dc4d21f521")
        .then((response) => {

            for (var i = 0; i < response.data.length; i++) {
                displayItems(response.data[i])
            }
        })
        .catch((error) => {
            console.log(error)
        })
    console.log(data)
})

// Initial display of items
displayItems();
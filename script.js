// const { default: axios } = require("axios");

const itemForm = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

    const newItem = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        quantity: itemQuantity
    };

    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

function displayItems() {
    itemList.innerHTML = '';
    items.forEach(function(item, index) {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `
            <strong>${item.name}</strong> - ${item.description} | Price: $${item.price.toFixed(2)} | Quantity: ${item.quantity}
            <button onclick="buyOne(${index})">Buy One</button>
            <button onclick="buyTwo(${index})">Buy Two</button>
            <button onclick="buyThree(${index})">Buy Three</button>
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        itemList.appendChild(itemElement);
    });
}

function editItem(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const editedItem = items[index];
    
    
    axios.put(`https://crudcrud.com/api/5e622e8e6c1d4e669cf6f633b6f5d763/apointdata/654737d92e0fb203e8543ab8`, editedItem)
        .then(response => {
            console.log('Item updated successfully:', response.data);
            displayItems();
        })
        .catch(error => {
            console.error('Error updating item:', error);
        });
}

function buyOne(index) {
    if (items[index].quantity >= 1) {
        items[index].quantity -= 1;
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    } else {
        alert('Insufficient Quantity');
    }
}

function buyTwo(index) {
    if (items[index].quantity >= 2) {
        items[index].quantity -= 2;
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    } else {
        alert('Insufficient Quantity');
    }
}

function buyThree(index) {
    if (items[index].quantity >= 3) {
        items[index].quantity -= 3;
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    } else {
        alert('Insufficient Quantity');
    }
}

function editItem(index) {
    alert(`Editing item: ${items[index].name}`);
}

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}




displayItems();

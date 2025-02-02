let cart = {};
let totalPrice = 0;

function addToCart(productName, productPrice) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
    } else {
        cart[productName] = { price: productPrice, quantity: 1 };
    }
    totalPrice += productPrice;
    updateShoppingList();
}

function updateShoppingList() {
    const shoppingListItems = document.getElementById('shopping-list-items');
    shoppingListItems.innerHTML = '';
    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.textContent = `${product} (${cart[product].quantity}) - $${cart[product].price * cart[product].quantity}`;
        shoppingListItems.appendChild(listItem);
    }
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

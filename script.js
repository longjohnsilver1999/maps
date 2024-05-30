document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Horse Feed', price: 25.00 },
        { id: 2, name: 'Saddle', price: 150.00 },
        { id: 3, name: 'Grooming Kit', price: 35.00 },
    ];

    const productContainer = document.getElementById('products');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    let cart = [];

    function displayProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h4>${product.name}</h4>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);
            total += item.price;
        });
        cartTotalContainer.textContent = total.toFixed(2);
    }

    displayProducts();
});

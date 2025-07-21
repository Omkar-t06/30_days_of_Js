// Cart state
let cart = [];

// Fetch and display products
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();
        const productListing = document.getElementById('product-listing');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <p>${product.description}</p>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productListing.appendChild(productCard);
        });

        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.product-card button').forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                addToCart(productId);
            });
        });

        showCheckoutButton()
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function showCheckoutButton() {
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.disabled = cart.length === 0;
    checkoutBtn.style.opacity = cart.length === 0 ? '0.5' : '1';
    checkoutBtn.style.cursor = cart.length === 0 ? 'not-allowed' : 'pointer';
}

// Function to add product to cart
function addToCart(productId) {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                const cartItem = cart.find(item => item.id === productId);
                if (cartItem) {
                    cartItem.quantity += 1;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                updateCartDisplay();
            }
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Function to update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <div>
                <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);

    // Add event listeners for quantity and remove buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const action = e.target.getAttribute('data-action');
            updateQuantity(productId, action);
        });
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });

    showCheckoutButton();
}

// Function to update quantity
function updateQuantity(productId, action) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (action === 'increase') {
            cartItem.quantity += 1;
        } else if (action === 'decrease' && cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        }
        updateCartDisplay();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to show checkout form
function showCheckout() {
    document.getElementById('shopping-cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
}

// Function to handle checkout
function handleCheckout(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (!name || !address || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate checkout process
    let total = 0;
    const orderSummary = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `${item.name} x${item.quantity} - $${itemTotal.toFixed(2)}`;
    }).join('<br>');

    const confirmationMessage = `
        Thank you, ${name}! Your order has been placed.<br>
        <strong>Order Summary:</strong><br>${orderSummary}<br>
        <strong>Total: ₹${total.toFixed(2)}</strong><br>
        Shipping to: ${address}<br>
        Order placed at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    document.getElementById('confirmation-message').innerHTML = confirmationMessage;
    document.getElementById('checkout-form').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';

    // Clear cart
    cart = [];
    updateCartDisplay();
}

// Event listeners
document.addEventListener('DOMContentLoaded', loadProducts);
document.getElementById('checkout-btn').addEventListener('click', showCheckout);
document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
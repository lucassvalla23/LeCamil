// Cart functionality module
class CartManager {
    constructor() {
        this.cartCount = 0;
        this.cart = [];
        this.init();
    }

    init() {
        this.initEventListeners();
    }

    initEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart-btn')) {
                e.preventDefault();
                this.addToCart(e);
            }
            
            if (e.target.closest('.cart-btn')) {
                e.preventDefault();
                this.openCart();
            }
        });
    }

    addToCart(event) {
        const button = event.target.closest('.add-to-cart-btn');
        const productId = parseInt(button.dataset.productId);
        
        // Find the product data
        const allProducts = [
            ...productsData.featured,
            ...productsData.boxArte,
            ...productsData.boxEscolar,
            ...productsData.boxAmigo,
            ...productsData.boxSorpresuki
        ];
        
        const product = allProducts.find(p => p.id === productId);
        if (!product) return;
        
        // Check if product already exists in cart
        const existingItem = this.cart.find(item => item.product.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                product: product,
                quantity: 1
            });
        }
        
        this.updateCartCount();
        this.animateCartButton();
        showNotification('Producto agregado al carrito! ');
    }

    animateCartButton() {
        const cartBtn = document.querySelector('.cart-btn');
        if (cartBtn) {
            cartBtn.style.animation = 'none';
            cartBtn.offsetHeight; // Trigger reflow
            cartBtn.style.animation = 'pulse 0.6s ease-in-out';
        }
    }

    updateCartCount() {
        this.cartCount = this.cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = this.cartCount;
        }
    }

    incrementQuantity(productId) {
        const item = this.cart.find(item => item.product.id === productId);
        if (item) {
            item.quantity += 1;
            this.updateCartCount();
            this.updateCartDisplay();
        }
    }

    decrementQuantity(productId) {
        const item = this.cart.find(item => item.product.id === productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                this.cart = this.cart.filter(cartItem => cartItem.product.id !== productId);
            }
            this.updateCartCount();
            this.updateCartDisplay();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.product.id !== productId);
        this.updateCartCount();
        this.updateCartDisplay();
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => {
            const price = parseFloat(item.product.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0);
    }

    updateCartDisplay() {
        const cartBody = document.querySelector('.cart-body');
        if (!cartBody) return;

        if (this.cart.length === 0) {
            cartBody.innerHTML = '<p class="empty-cart">Tu carrito est\u00e1 vac\u00edo</p>';
            return;
        }

        const cartItemsHTML = this.cart.map(item => `
            <div class="cart-item" data-product-id="${item.product.id}">
                <div class="cart-item-image">
                    <img src="${item.product.image}" alt="${item.product.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.product.name}</h4>
                    <p class="cart-item-price">${item.product.price}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" data-product-id="${item.product.id}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-product-id="${item.product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="cart-item-total">
                    $${(parseFloat(item.product.price.replace('$', '')) * item.quantity).toFixed(2)}
                </div>
                <button class="remove-item" data-product-id="${item.product.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        const total = this.calculateTotal();

        cartBody.innerHTML = `
            <div class="cart-items">
                ${cartItemsHTML}
            </div>
            <div class="cart-summary">
                <div class="cart-total">
                    <strong>Total: $${total.toFixed(2)}</strong>
                </div>
                <div class="cart-actions">
                    <button class="checkout-btn">Finalizar Compra</button>
                </div>
            </div>
        `;

        // Add event listeners for quantity controls
        cartBody.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('[data-product-id]')?.dataset.productId);
            
            if (e.target.closest('.increase')) {
                this.incrementQuantity(productId);
            } else if (e.target.closest('.decrease')) {
                this.decrementQuantity(productId);
            } else if (e.target.closest('.remove-item')) {
                this.removeFromCart(productId);
            }
        });
    }

    openCart() {
        const existingModal = document.querySelector('.cart-modal');
        if (existingModal) {
            existingModal.remove();
            return;
        }

        const cartModal = document.createElement('div');
        cartModal.className = 'cart-modal';
        cartModal.innerHTML = `
            <div class="cart-modal-content">
                <div class="cart-header">
                    <h3>Mi Carrito</h3>
                    <button class="close-cart">&times;</button>
                </div>
                <div class="cart-body">
                    <!-- Content will be updated by updateCartDisplay -->
                </div>
            </div>
        `;

        document.body.appendChild(cartModal);
        this.updateCartDisplay();

        // Close cart functionality
        cartModal.querySelector('.close-cart').addEventListener('click', () => {
            cartModal.remove();
        });

        // Close when clicking outside
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.remove();
            }
        });
    }
}
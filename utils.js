// Utility functions for dynamic content loading
class ComponentLoader {
    static async loadComponent(url, containerId) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            document.getElementById(containerId).innerHTML = html;
        } catch (error) {
            console.error(`Error loading component ${url}:`, error);
        }
    }

    static createProductCard(product) {
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Agregar al Carrito</span>
                    </button>
                </div>
            </div>
        `;
    }

    static renderProducts(products, containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = products.map(product => this.createProductCard(product)).join('');
        }
    }

    static renderProductSection(categoryKey, products, categoryInfo) {
        const info = categoryInfo[categoryKey];
        return `
            <section class="box-categories" id="${categoryKey.replace('box', 'box-').toLowerCase()}">
                <div class="container">
                    <h2 class="section-title">${info.title}</h2>
                    <p class="category-description">${info.description}</p>
                    <div class="products-grid" id="${categoryKey}-products">
                        ${products.map(product => this.createProductCard(product)).join('')}
                    </div>
                </div>
            </section>
        `;
    }
}

// Notification system 
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #FF7F7F, #FFB6C1);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 8px 25px rgba(255, 127, 127, 0.3);
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 1500);
}
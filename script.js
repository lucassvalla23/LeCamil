// Main application script - refactored for better organization
class LeCamilApp {
    constructor() {
        this.cartManager = null;
        this.navigationManager = null;
        this.animationManager = null;
        this.init();
    }

    async init() {
        // Load components
        await this.loadComponents();
        
        // Initialize managers
        this.cartManager = new CartManager();
        this.navigationManager = new NavigationManager();
        this.animationManager = new AnimationManager();
        
        // Initialize remaining functionality
        this.initProducts();
    }

    async loadComponents() {
        try {
            await ComponentLoader.loadComponent('components/header.html', 'header-container');
            await ComponentLoader.loadComponent('components/hero.html', 'hero-container');
            await ComponentLoader.loadComponent('components/footer.html', 'footer-container');
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    initProducts() {
        // Render featured products
        ComponentLoader.renderProducts(productsData.featured, 'featured-products');
        
        // Render BOX categories
        const boxCategoriesContainer = document.getElementById('box-categories-container');
        if (boxCategoriesContainer) {
            const boxSections = [
                ComponentLoader.renderProductSection('boxArte', productsData.boxArte, categoryInfo),
                ComponentLoader.renderProductSection('boxEscolar', productsData.boxEscolar, categoryInfo),
                ComponentLoader.renderProductSection('boxAmigo', productsData.boxAmigo, categoryInfo),
                ComponentLoader.renderProductSection('boxSorpresuki', productsData.boxSorpresuki, categoryInfo)
            ];
            
            boxCategoriesContainer.innerHTML = boxSections.join('');
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LeCamilApp();
});

// Global utility functions
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
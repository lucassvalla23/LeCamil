// Navigation functionality module
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.initMobileMenu();
        this.initSmoothScrolling();
        this.initCTAButton();
        this.initBrandClick();
    }

    initMobileMenu() {
        // Wait for header to load then initialize
        setTimeout(() => {
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            const navMenu = document.getElementById('nav-menu');

            if (mobileMenuToggle && navMenu) {
                mobileMenuToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                });

                // Handle dropdown toggles on mobile
                const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
                dropdownToggles.forEach(toggle => {
                    toggle.addEventListener('click', (e) => {
                        if (window.innerWidth <= 768) {
                            e.preventDefault();
                            const dropdown = toggle.closest('.dropdown');
                            
                            // Close other dropdowns
                            document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                                if (otherDropdown !== dropdown) {
                                    otherDropdown.classList.remove('active');
                                }
                            });
                            
                            // Toggle current dropdown
                            dropdown.classList.toggle('active');
                        }
                    });
                });

                // Close mobile menu when clicking on a link
                document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-link').forEach(link => {
                    link.addEventListener('click', () => {
                        navMenu.classList.remove('active');
                        const icon = mobileMenuToggle.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                        
                        // Close any open dropdowns
                        document.querySelectorAll('.dropdown').forEach(dropdown => {
                            dropdown.classList.remove('active');
                        });
                    });
                });
            }
        }, 100);
    }

    initSmoothScrolling() {
        // Smooth scrolling for navigation links
        document.addEventListener('click', (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    initCTAButton() {
        setTimeout(() => {
            const ctaButton = document.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.addEventListener('click', () => {
                    document.querySelector('#productos').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            }
        }, 100);
    }

    initBrandClick() {
        setTimeout(() => {
            const brandName = document.querySelector('.brand-name');
            if (brandName) {
                brandName.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        }, 100);
    }
}
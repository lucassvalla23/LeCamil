// Animations and scroll effects module
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollEffects();
        this.initFadeInAnimations();
    }

    initScrollEffects() {
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (header) {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.background = 'white';
                    header.style.backdropFilter = 'none';
                }
            }
        });
    }

    initFadeInAnimations() {
        // Intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe elements for animation (with delay to ensure elements are loaded)
        setTimeout(() => {
            document.querySelectorAll('.product-card, .section-title, .hero-text, .about-text').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                observer.observe(el);
            });
        }, 500);
    }
}
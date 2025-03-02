document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fade-in animation on scroll
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
                element.style.animationPlayState = "running";
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Form submission with validation
    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Parallax effect for hero background (optional for extra wow factor)
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Add subtle floating particles for extra flair
    function createParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particles';
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDelay = `${Math.random() * 3}s`;
            particleContainer.appendChild(particle);
        }
    }

    createParticles();
});

// Add this to styles.css for particles
.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(255, 215, 0, 0.8); /* Gold particles */
    border-radius: 50%;
    animation: float 6s infinite ease-in-out;
}

@keyframes float {
    0% { transform: translateY(0) scale(1); opacity: 0.5; }
    50% { transform: translateY(-60px) scale(1.3); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.5; }
}

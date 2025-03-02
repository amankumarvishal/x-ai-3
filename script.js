document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in-up");
    
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
        });
    });

    // Form submission (basic validation and alert)
    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Add a subtle particle effect (optional, for extra "awesome")
    function createParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particles';
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particleContainer.appendChild(particle);
        }
    }

    createParticles();
});

// Add this to styles.css for particles if you want the effect
.particle {
    position: absolute;
    width: 5px;
    height: 5px;
    background: rgba(231, 76, 60, 0.8);
    border-radius: 50%;
    animation: float 5s infinite ease-in-out;
}

@keyframes float {
    0% { transform: translateY(0) scale(1); opacity: 0.5; }
    50% { transform: translateY(-50px) scale(1.2); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.5; }
}

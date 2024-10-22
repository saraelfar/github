
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav ul');

    // Toggle mobile navigation menu
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Reset the form after submission
        });
    }

    // Testimonial carousel animation (3D rotation)
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        let angle = 0;
        setInterval(() => {
            angle += 120;
            carousel.style.transform = `rotateY(${angle}deg)`;  // Use backticks for dynamic values
        }, 5000); // Change slide every 5 seconds
    }

    // 3D effect for a specific advanced element
    const advancedBox = document.querySelector('.advanced-3d');
    if (advancedBox) {
        // Track mouse movement to add 3D rotation
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            advancedBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Add pop effect on mouse enter and reset on mouse leave
        advancedBox.addEventListener('mouseenter', () => {
            advancedBox.style.transition = 'none'; // Disable transition on enter
        });

        advancedBox.addEventListener('mouseleave', () => {
            advancedBox.style.transition = 'transform 0.5s ease'; // Smooth transition back
            advancedBox.style.transform = 'rotateY(0deg) rotateX(0deg)'; // Reset to initial state
        });
    }

    // 3D Animation for Buttons and Service Boxes
    const serviceBoxes = document.querySelectorAll('.service-box');
    const buttons = document.querySelectorAll('.btn');

    serviceBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transition = 'transform 0.5s ease-in-out';
            box.style.transform = 'perspective(1000px) translateZ(30px) rotateY(5deg)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'perspective(1000px) translateZ(0)';
        });
    });

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transition = 'transform 0.5s ease-in-out';
            button.style.transform = 'perspective(1000px) translateZ(15px) scale(1.05)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'perspective(1000px) translateZ(0)';
        });
    });

    // Mouse-based 3D rotation effect for the hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            heroSection.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroSection.style.transition = 'transform 0.5s ease-out';
            heroSection.style.transform = 'rotateY(0deg) rotateX(0deg)'; // Reset to original state
        });
    }
});

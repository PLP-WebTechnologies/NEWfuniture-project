document.querySelectorAll('.section2a button, .section2b button, .section5a button, .section5b button').forEach(button => {
    button.addEventListener('click', (event) => {
        alert(`You clicked on a button: ${event.target.textContent}`);
    });
});

document.querySelectorAll('.section2a, .section2b, .section5a, .section5b').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.filter = 'brightness(85%)'; // Darken image on hover
    });

    image.addEventListener('mouseleave', () => {
        image.style.filter = 'brightness(100%)'; // Restore original brightness
    });
});

// Smooth scrolling for navigation links    
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
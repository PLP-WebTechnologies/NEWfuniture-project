
const sectionButtons = document.querySelectorAll('.section2a button, .section2b button, .section5a button, .section5b button, .section7b button, .section8a button');

sectionButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // You can customize the action here, for example, show an alert when clicked
        alert(`You clicked on a button: ${event.target.textContent}`);
    });
});
const furnitureImages = document.querySelectorAll('.section2a, .section2b, .section5a, .section5b, .section7a, .section7b, .section8a');


furnitureImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.filter = 'brightness(85%)'; // Darken image on hover
    });

    image.addEventListener('mouseleave', () => {
        image.style.filter = 'brightness(100%)'; // Restore original brightness
    });
});

// Smooth scrolling for navigation links    
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const toggleVisibilityButton = document.querySelector('#toggleVisibilityButton');
const sectionToToggle = document.querySelector('.section3');

if (toggleVisibilityButton && sectionToToggle) {
    toggleVisibilityButton.addEventListener('click', () => {
        sectionToToggle.classList.toggle('hidden');
    });
}
const toggleVisibilityButton2 = document.querySelector('#toggleVisibilityButton2');
const sectionToToggle2 = document.querySelector('.section4');   

if (toggleVisibilityButton2 && sectionToToggle2) {
    toggleVisibilityButton2.addEventListener('click', () => {
        sectionToToggle2.classList.toggle('hidden');
    });
}
const toggleVisibilityButton3 = document.querySelector('#toggleVisibilityButton3');
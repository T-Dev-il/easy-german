document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburgerButton = document.querySelector('.hamburger-button');
    const subMenuBar = document.querySelector('.sub-menu-bar');
    
    // Toggle mobile menu when hamburger button is clicked
    hamburgerButton.addEventListener('click', function() {
        // Toggle active class on the button itself (for the animation)
        this.classList.toggle('active');
        
        // Toggle active class on the menu
        subMenuBar.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (subMenuBar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});
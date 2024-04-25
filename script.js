// Select the search button and search bar container
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let signInBtn = document.querySelector('#signin-btn'); // Corrected selector for sign-in button
let signUpBtn = document.querySelector('#signup-btn'); // Corrected selector for sign-up button
let loginForm = document.querySelector('.login-form-container');
let signUpForm = document.querySelector('.signin-form-container'); // Corrected selector for sign-up form
let formClose = document.querySelector('.form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


// When the window is scrolled, remove the active class from search button, search bar, menu, and navbar
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    signUpForm.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}); // Fixed syntax error, added closing bracket

// Toggle the active class when the search button is clicked
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    loginForm.classList.remove('active');
    signUpForm.classList.remove('active');
});

// Toggle the login form when the sign-in button is clicked
signInBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    signUpForm.classList.remove('active');
});

// Toggle the sign-up form when the sign-up button is clicked
signUpBtn.addEventListener('click', () => {
    signUpForm.classList.toggle('active');
    loginForm.classList.remove('active');
});

// Close the login form when the close button is clicked
formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
    signUpForm.classList.remove('active');
});


videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from the previously active button
        document.querySelector('.controls .active').classList.remove('active');
        
        // Add 'active' class to the clicked button
        btn.classList.add('active');
        
        // Get the value of 'data-src' attribute from the clicked button
        let src = btn.getAttribute('data-src');
        
        // Update the 'src' attribute of the video slider
        document.querySelector('#video-slider').src = src;
    });
});

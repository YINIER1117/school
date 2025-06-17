// You can add JavaScript here for things like:
// - Smooth scrolling for navigation links
// - Simple form validation (though server-side validation is crucial for security)
// - Animations or interactive elements

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Simple console log when the page loads
console.log("愛與關懷慈善公會 網站已載入！");
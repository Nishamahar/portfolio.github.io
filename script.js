// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top;
                const offset = 70; // Offset for navigation bar height
                window.scrollBy({
                    top: offsetTop - offset,
                    behavior: 'smooth',
                });
            }
        });
    });
});

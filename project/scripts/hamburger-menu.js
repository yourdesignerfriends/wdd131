document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const menuLinks = document.querySelectorAll('.menu-link');
    const mainHeading = document.getElementById('heading-h1');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.textContent.toLowerCase();
            mainHeading.textContent = event.target.textContent;
            filterTemples(filter);
        });
    });
    // Hamburger menu button
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const mainTitle = document.querySelector('#current-page');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        mainTitle.classList.toggle('hidden');
    });
});
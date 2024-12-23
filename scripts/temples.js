document.addEventListener('DOMContentLoaded', () => {
    /* ------------- Navigation -------------*/
    const menuLinks = document.querySelectorAll('.menu-link');
    const mainHeading = document.getElementById('main-heading');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            mainHeading.textContent = event.target.textContent;
        });
    });

    /* ------------- hamburger menu button -------------*/
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const mainTitle = document.querySelector('#main-title');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        mainTitle.classList.toggle('hidden');
    });
});
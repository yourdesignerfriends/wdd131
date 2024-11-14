document.addEventListener('DOMContentLoaded', () => {
    /* ------------- During the learning activities I learned more about loops. I will try to apply it here -------------*/
    

    const menuLinks = document.querySelectorAll('.menu-link');
    const mainHeading = document.getElementById('main-heading');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            mainHeading.textContent = event.target.textContent;
        });
    });

    /* ------------- hamburger menu button -------------*/
    /*const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    const toggleMenu = () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    };

    if (hamButton) {
        hamButton.addEventListener('click', toggleMenu);
    }*/
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});
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
    /* */
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.getAttribute('data-filter');
            templeContainer.innerHTML = '';

            let filteredTemples = temples;

            if (filter === 'old') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            } else if (filter === 'new') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            } else if (filter === 'large') {
                filteredTemples = temples.filter(temple => temple.area > 90000);
            } else if (filter === 'small') {
                filteredTemples = temples.filter(temple => temple.area < 10000);
            }

            filteredTemples.forEach(createTempleCard);
        });
    });
});
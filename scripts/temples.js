document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('temple-container');
    const templeData = [
        {
            src: "images/seattle-washington-temple.webp",
            alt: "Seattle Washington Temple",
            caption: "Seattle Washington Temple",
        },
    ];
    // I'll use a for loop to repeat the image 10 times.
    for (let i = 0; i < 9; i++) {
        templeData.forEach(data => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = data.src;
            img.alt = data.alt;

            const figcaption = document.createElement('figcaption');
            figcaption.textContent = data.caption;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            container.appendChild(figure);
        });
    }

    // This is the js to update the header in main when a link is clicked.
    const menuLinks = document.querySelectorAll('.menu-link');
    const mainHeading = document.getElementById('main-heading');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
        event.preventDefault();
        mainHeading.textContent = event.target.textContent;
        });
    });

    // And here is the js for the hamburger 🍔 menu.
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (hamButton) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    }
});
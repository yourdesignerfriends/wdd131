document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const menuLinks = document.querySelectorAll('.menu-link');
    const mainHeading = document.getElementById('heading-h1');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const filter = event.target.textContent.toLowerCase();
            mainHeading.textContent = event.target.textContent;
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

    // footer 
    const currentYear = new Date().getFullYear(); 
    const lastModified = document.lastModified; 
    const author = "Analina Del Vecchio Madriz";
    const place = "Washington, USA";

    const link = "<a href='site-plan.html' class='footer-link'>Site Plan</a>";

    const copyrightElement = document.getElementById("copyright"); 
    const modifiedElement = document.getElementById("lastModified");
    
    if (copyrightElement) { 
        copyrightElement.innerHTML = `\u00A9 ${currentYear} | ${author} | ${place} | ${link}`; 
        } 
    if (modifiedElement) { 
        modifiedElement.textContent = `Last modification: ${lastModified}`; 
    }
});
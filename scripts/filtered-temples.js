document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const menuLinks = document.querySelectorAll('.menu-link');
    const mainHeading = document.getElementById('main-heading');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.textContent.toLowerCase();
            mainHeading.textContent = event.target.textContent;
            filterTemples(filter);
        });
    });
    // Get dates
        const currentYear = new Date().getFullYear(); 
        const lastModified = document.lastModified; 
        const author = "Analina Del Vecchio Madriz";
        const place = "Washington, USA";
    
        const copyrightElement = document.getElementById("copyright"); 
        const modifiedElement = document.getElementById("lastModified");
        
        if (copyrightElement) { 
            copyrightElement.textContent = `\u00A9 ${currentYear} | ${author} | ${place}`; 
            } 
        if (modifiedElement) { 
            modifiedElement.textContent = `Last modification: ${lastModified}`; 
            } 
    // Hamburger menu button
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const mainTitle = document.querySelector('#main-title');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        mainTitle.classList.toggle('hidden');
    });
    // Array of Temple Objects
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 41010,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3549.jpg"
        },
        {
            templeName: "Caracas Venezuela Temple",
            location: "Caracas, Venezuela",
            dedicated: "2000, August, 5",
            area: 15332,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
        },
        {
            templeName: "Hong Kong China Temple",
            location: "Hong Kong, China",
            dedicated: "1996, May, 26",
            area: 51921,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-53443.jpg"
        },
    ];
    // Temple Cards
    function createTempleCard(temple) {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        return card;
    }
    // Show Temple Cards
    function displayTemples(filteredTemples) {
        const templeContainer = document.querySelector(".temple-container");
        templeContainer.innerHTML = '';
        filteredTemples.forEach(temple => {
            templeContainer.appendChild(createTempleCard(temple));
        });
    }
    // Filter Temple Cards
    function filterTemples(filter) {
        let filteredTemples = temples;
        switch (filter) {
            case 'old':
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'home':
            default:
                filteredTemples = temples;
        }
        displayTemples(filteredTemples);
    }

    filterTemples('home');
});
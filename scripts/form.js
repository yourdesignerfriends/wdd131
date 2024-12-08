document.addEventListener('DOMContentLoaded', () => {
    // Last modified 
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
    
    // Product Array
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    // Dynamic Options
    const selectElement = document.getElementById('product');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = `${product.name} (Rating: ${product.averagerating})`;
        selectElement.appendChild(option);
    });

    // Use localStorage to keep track of the number of reviews
    let reviewCount = Number(localStorage.getItem('reviewCount-ls')) || 0;

    const reviewForm = document.querySelector('form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', () => {
            reviewCount++;
            localStorage.setItem('reviewCount-ls', reviewCount);
        });
    }

    const reviewShowElm = document.getElementById('review-count');
    if (reviewShowElm) {
        reviewShowElm.textContent = `Number of reviews submitted: ${reviewCount}`;
    }
    
    // Increment counter in review.html
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === "review.html") {
        reviewCount++;
        localStorage.setItem('reviewCount-ls', reviewCount);
        console.log(`You have submitted ${reviewCount} reviews.`);
    }
});
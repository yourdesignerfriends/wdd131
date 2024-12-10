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
    // Adding a counter
    let reviewsCompleted = parseInt(localStorage.getItem('reviewsCompleted')) || 0;

    reviewsCompleted++;
    localStorage.setItem('reviewsCompleted', reviewsCompleted);

    document.getElementById('clicks').textContent = reviewsCompleted;

    const resetButton = document.getElementById('reset-counter');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            localStorage.removeItem('reviewsCompleted');
            document.getElementById('clicks').textContent = 0;
        });
    }
});


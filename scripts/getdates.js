document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const author = "Analina Del Vecchio"; 
    const place = "Washington, USA";
    const copyrightElement = document.getElementById("copyright");
    
    if (copyrightElement) { 
        copyrightElement.innerHTML = `\u00A9 ${currentYear} 🌺 ${author} 🌺 ${place}`;
    }
    const modifiedElement = document.getElementById("lastModified");
    if (modifiedElement) {
        modifiedElement.innerHTML = `Last Modified: ${lastModified}`;
    }
    });

document.addEventListener('DOMContentLoaded', () => {
    let reviewsCompleted = parseInt(localStorage.getItem('reviewsCompleted')) || 0;
    document.getElementById('clicks').textContent = reviewsCompleted;
    reviewsCompleted++;
    localStorage.setItem('reviewsCompleted', reviewsCompleted);
});

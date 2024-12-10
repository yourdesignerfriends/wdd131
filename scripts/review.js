document.addEventListener('DOMContentLoaded', () => {
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


document.addEventListener('DOMContentLoaded', () => {
    let messagesSent = parseInt(localStorage.getItem('messagesSent')) || 0;
    messagesSent++;
    localStorage.setItem('messagesSent', messagesSent);

    // Update the displayed count
    const clicksElement = document.getElementById('clicks');
    if (clicksElement) {
        clicksElement.textContent = messagesSent;
    }

    const resetButton = document.getElementById('reset-counter');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            localStorage.removeItem('messagesSent');
            if (clicksElement) {
                clicksElement.textContent = 0;
            }
        });
    }
});
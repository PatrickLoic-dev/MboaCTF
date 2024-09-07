document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-sponsor');
    const container = document.querySelector('.cards.carrusel');

    const scaleCards = () => {
        // Get the center position of the container
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distanceFromCenter = Math.abs(containerCenter - cardCenter);

            if (distanceFromCenter < 100) {
                // Center card
                card.style.transform = 'scale(1)';
            } else if (distanceFromCenter < 300) {
                // Adjacent cards
                card.style.transform = 'scale(0.90)';
            } else {
                // Furthermost cards
                card.style.transform = 'scale(0.80)';
            }
        });
    };

    // Add event listeners to detect scrolling and resizing
    container.addEventListener('scroll', scaleCards);
    window.addEventListener('resize', scaleCards);

    // Initial scaling
    scaleCards();
});

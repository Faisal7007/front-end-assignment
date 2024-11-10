document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.card');
    productCards.forEach(card => {
        const cardId = card.id;
        const extraFeatures = document.getElementById(`extra-features-${cardId}`);
        const cardHeader = card.querySelector('.card-header');
        cardHeader.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleFeatures(cardId);
        });
        const dropdowns = extraFeatures.querySelectorAll('select');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (event) => {
                event.stopPropagation();
            });
            dropdown.addEventListener('focus', () => {
            });
        });
    });
});

function toggleFeatures(cardId) {
    const allExtraFeatures = document.querySelectorAll('.extra-features');
    allExtraFeatures.forEach((featureSection) => {
        if (featureSection.id === `extra-features-${cardId}`) {
            featureSection.style.display = featureSection.style.display === 'block' ? 'none' : 'block';
        } else {
            featureSection.style.display = 'none';
        }
    });
}

function updateTotalPrice() {
    const selectedUnit = document.querySelector('input[name="unit"]:checked');
    if (selectedUnit) {
        const selectedPrice = parseFloat(selectedUnit.getAttribute('data-price'));
        document.getElementById('totalPrice').textContent = `₹${selectedPrice.toFixed(2)}`;
    }
}

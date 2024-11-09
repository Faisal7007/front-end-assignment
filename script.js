document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.card');

    productCards.forEach(card => {
        const cardId = card.id;
        const extraFeatures = document.getElementById(`extra-features-${cardId}`);

        // Handle card header click
        const cardHeader = card.querySelector('.card-header');
        cardHeader.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event bubbling
            toggleFeatures(cardId);
        });

        // Prevent closing when interacting with dropdowns
        const dropdowns = extraFeatures.querySelectorAll('select');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent card click
            });
            dropdown.addEventListener('focus', () => {
                // Optionally, add focus styles or other behaviors
            });
        });
    });
});

/**
 * Toggles the visibility of the extra features for the clicked card.
 * Ensures that only one card is expanded at a time.
 * @param {string} cardId - The ID of the clicked card.
 */
function toggleFeatures(cardId) {
    // Get all the extra features sections
    const allExtraFeatures = document.querySelectorAll('.extra-features');

    // Loop through all extra features sections
    allExtraFeatures.forEach((featureSection) => {
        if (featureSection.id === `extra-features-${cardId}`) {
            // Toggle visibility for the clicked card
            featureSection.style.display = featureSection.style.display === 'block' ? 'none' : 'block';
        } else {
            // Hide all other feature sections
            featureSection.style.display = 'none';
        }
    });
}

function updateTotalPrice() {
    // Find the selected radio button in the 'unit' group
    const selectedUnit = document.querySelector('input[name="unit"]:checked');
    if (selectedUnit) {
        // Get the price from the selected radio button's data attribute
        const selectedPrice = parseFloat(selectedUnit.getAttribute('data-price'));
        // Update the total price display
        document.getElementById('totalPrice').textContent = `₹${selectedPrice.toFixed(2)}`;
    }
}

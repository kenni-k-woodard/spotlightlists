/* Imports */

import { fetchPets } from './fetch-utils.js';
import { renderPet } from './render-utils.js';

/* Get DOM Elements */
const petsContainer = document.getElementById('pets');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const pets = await fetchPets();

    for (let pet of pets) {
        const petEl = renderPet(pet);

        petsContainer.append(petEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

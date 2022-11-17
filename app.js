/* Imports */

import { fetchPets, fetchSnacks } from './fetch-utils.js';
import { renderPet, renderSnack } from './render-utils.js';

/* Get DOM Elements */
const petsContainer = document.getElementById('pets');
const snacksContainer = document.getElementById('snacks');
const drinksContainer = document.getElementById('drinks');
const hobbiesContainer = document.getElementById('hobbies');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const pets = await fetchPets();

    for (let pet of pets) {
        const petEl = renderPet(pet);

        petsContainer.append(petEl);
    }
});

window.addEventListener('load', async () => {
    const snacks = await fetchSnacks();

    for (let snack of snacks) {
        const snackEl = renderSnack(snack);

        snacksContainer.append(snackEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

/* Imports */

import { fetchDrinks, fetchHobbies, fetchPets, fetchSnacks } from './fetch-utils.js';
import { renderDrink, renderHobby, renderPet, renderSnack } from './render-utils.js';

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

window.addEventListener('load', async () => {
    const drinks = await fetchDrinks();

    for (let drink of drinks) {
        const drinkEl = renderDrink(drink);

        drinksContainer.append(drinkEl);
    }
});

window.addEventListener('load', async () => {
    const hobbies = await fetchHobbies();

    for (let hobby of hobbies) {
        const hobbyEl = renderHobby(hobby);

        hobbiesContainer.append(hobbyEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

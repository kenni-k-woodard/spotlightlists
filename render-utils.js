export function renderPet(pet) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = pet.name;

    const p = document.createElement('p');
    p.textContent = `a ${pet.size} ${pet.animal} with a ${pet.personality} personality`;

    div.append(h2, p);

    return div;
}

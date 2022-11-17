export function renderPet(pet) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = pet.name;

    const p = document.createElement('p');
    p.textContent = `a ${pet.size} ${pet.animal} with a ${pet.personality} personality`;

    div.append(h2, p);

    return div;
}

export function renderSnack(snack) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = snack.name;

    const p = document.createElement('p');
    p.textContent = `flavor profile: ${snack.category}, texture: ${snack.texture}`;

    const p2 = document.createElement('p');
    p2.textContent = `Best enjoyed: ${snack.season}`;

    div.append(h2, p, p2);

    return div;
}

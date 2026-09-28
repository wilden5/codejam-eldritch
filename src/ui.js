import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";

export const renderAncients = () => {
    const container = document.querySelector('.section-ancients__container');

    ancientsData.forEach(ancient => {
        const card = document.createElement("div");
        card.classList.add('ancient-card');
        card.dataset.id = ancient.id;
        card.innerHTML = `<img src="${ancient.cardFace}" alt="${ancient.name}">`;

        container.appendChild(card);
    })
}

export const renderDifficulties = () => {
    const container = document.querySelector('.section-difficulties__container');

    difficulties.forEach(difficulties => {
        const button = document.createElement("button");
        button.classList.add('difficulty-button');
        button.dataset.id = difficulties.id;
        button.textContent = difficulties.name;

        container.appendChild(button);
    })
}
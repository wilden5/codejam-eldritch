import ancientsData from "./data/ancients.js";

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
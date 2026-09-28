import './style.css'
import {renderAncients, renderDifficulties} from "./ui.js";
import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";

const GAME_STATE = {
    selectedAncient: null,
    selectedDifficulty: null,
    generatedDeck: []
}
const SECTION_DIFFICULTIES = document.querySelector('.section-difficulties');
const SHUFFLE_BUTTON = document.querySelector('.section-difficulties__shuffle-button');

const handleAncientSelection = () => {
    document.querySelector('.section-ancients__container').addEventListener('click', (event) => {
        const ancientElem = event.target.closest('.ancient-card');

        if (!ancientElem) return;

        document.querySelectorAll('.ancient-card').forEach(card => card.classList.remove('active'));
        ancientElem.classList.add('active');

        GAME_STATE.selectedAncient = ancientsData.find(ancient => ancient.id === ancientElem.dataset.id);
        SECTION_DIFFICULTIES.classList.remove('hidden');
    })
}

const handleDifficultySelection = () => {
    SECTION_DIFFICULTIES.addEventListener('click', (event) => {
        const difficultyElem = event.target.closest('.difficulty-button');

        if (!difficultyElem) return;

        document.querySelectorAll('.difficulty-button').forEach(card => card.classList.remove('active'));
        difficultyElem.classList.add('active');

        GAME_STATE.selectedDifficulty = difficulties.find((difficulty) => difficulty.id === difficultyElem.dataset.id);
        SHUFFLE_BUTTON.disabled = false;

        console.log(GAME_STATE);
    })
}

const init = () => {
    renderAncients();
    renderDifficulties();
    handleAncientSelection();
    handleDifficultySelection();

    SHUFFLE_BUTTON.disabled = true; // HMR Sucks, and they say its better than webpack - yes of course
}

init();
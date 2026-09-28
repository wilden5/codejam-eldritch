import cardsDataGreen from "./data/mythicCards/green/index.js";
import cardsDataBrown from "./data/mythicCards/brown/index.js";
import cardsDataBlue from "./data/mythicCards/blue/index.js";

export const getFilteredCardsByColor = (color, difficulty) => {
    let cards = [];

    switch (color) {
        case 'green':
            cards = [...cardsDataGreen]
            break;
        case 'brown':
            cards = [...cardsDataBrown];
            break;
        case 'blue':
            cards = [...cardsDataBlue];
            break;
        default:
            break;
    }

    switch (difficulty) {
        case 'normal':
            return cards;
        case 'easy':
            return cards.filter(card => card.difficulty !== 'hard');
        case 'hard':
            return cards.filter(card => card.difficulty !== 'easy');
        case 'adventure':
            return cards; // todo: implement adventure difficulty
        case 'hell-on-earth':
            return cards; // todo: implement hell-on-earth difficulty
        default:
            return cards;
    }
}
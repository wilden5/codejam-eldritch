export const shuffleDeck = (array) => {
    const deckCopy = [...array];

    for (let i = deckCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckCopy[i], deckCopy[j]] = [deckCopy[j], deckCopy[i]];
    }

    return deckCopy;
}

export const getRandomCards = (array, count) => {
    shuffleDeck(array).slice(0, count);
}
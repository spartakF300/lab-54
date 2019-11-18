class CardDeck {
    cards = [];

    constructor() {
        let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'a', 'j', 'q', 'k'];
        let suit = ['diams', 'clubs', 'spades', 'hearts'];

        for (let q = 0; q < rank.length; q++) {
            for (let i = 0; i < suit.length; i++) {
                this.cards.push({rank: rank[q], suit: suit[i]})
            }
        }

    }

    getCard() {
        let card = this.cards[Math.floor(Math.random() * this.cards.length)];
        let index = this.cards.indexOf(card)
        this.cards.splice(index, 1);
        return card

    }

    getCards(howMany) {
        const newCards = [];
        for (var i = 0; i < howMany; i++) {
            newCards.push(this.getCard())
        }
        return newCards
    }
}


export default CardDeck
import React, {Component} from 'react';
import './cards.css'
import Card from "./Card";
import CardDeck from "./CardDesk";
import PokerHand from "./PokerHand";

class App extends Component {
    state = {
        cards: [],

    };
    getCard = () => {
        const cardDeck = new CardDeck();
        let randCards = cardDeck.getCards(5);
        return randCards

    };
    addCard = () => {
        let cards = this.getCard();
        this.setState({cards});
        this.getPokerHand(cards)
    };

    getPokerHand(cards)  {
        const pokerHand = new PokerHand(cards);
        this.hand = pokerHand.getOutcome()
    };

    render() {
        return (
            <div className={'block'}>

                <div className="playingCards">
                    <button onClick={this.addCard}>click</button>
                    {this.state.cards.map((card, i) =>
                        <Card key={i} suit={card.suit} rank={card.rank}/>
                    )}
                    <p>{this.hand}</p>
                </div>
            </div>
        );
    }
}

export default App;


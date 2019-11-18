import React from 'react';

const Card = (props) => {
    let suit;
    switch (props.suit) {
        case 'diams':
            suit = '♦';
            break;
        case 'clubs':
            suit = '♣';
            break;
        case 'spades':
            suit = '♠';
            break;
        case 'hearts':
            suit = '♥';
            break;
        default:
            break
    }

    let className = 'card rank-' + props.rank  +' ' + props.suit;
    return (

        <div className={className}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{suit}</span>
        </div>
    );
};

export default Card;
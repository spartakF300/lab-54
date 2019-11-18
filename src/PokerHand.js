class PokerHand {

    constructor(pokerHand) {
        this.pokerHand = pokerHand;
        this.combination = {
            runks: {
                '2': 0,
                '3': 0,
                '4': 0,
                '5': 0,
                '6': 0,
                '7': 0,
                '8': 0,
                '9': 0,
                '10': 0,
                'a': 0,
                'j': 0,
                'q': 0,
                'k': 0
            },
            suits: {
                'diams': 0,
                'clubs': 0,
                'spades': 0,
                'hearts': 0,
            }
        }
    }

    getOutcome = () => {
      this.pokerHand.forEach((card) => {
          this.combination.runks[card.rank]++;
          this.combination.suits[card.suit]++;
      });

        let counter = 0;

        Object.keys(this.combination.runks).forEach(runk => {
            switch (this.combination.runks[runk]) {
                case 2: return counter += 1;
                case 3: return counter += 3;
                case 4: return counter = 7;
            }
        });

        Object.keys(this.combination.suits).forEach(suit => {
            if (this.combination.suits[suit] === 5) counter = 5;
        });

        let arr = Object.keys(this.combination.runks).map(runk => {
            let name = parseInt(runk);
                if (!name){
                    switch (runk) {
                        case 'j': name = 11; break;
                        case 'q': name = 12; break;
                        case 'k': name = 13; break;
                        case 'a': name = 14; break;
                    }
                }
            return {name, count: this.combination.runks[runk]}
        }).filter(item => item.count > 0).sort((a, b) => a.name + b.name);

        let isStreet = false;
        if (arr.length === 5){
            for (let i = 0; i < arr.length -1; i++){
                console.log((arr[i].name +1) , arr[i+1].name);
                if((arr[i].name +1) === arr[i+1].name){
                    isStreet = true;
                } else {
                    isStreet = false;
                    i = arr.length;
                }
            }

        }
        if (isStreet && counter === 5) {
           alert('street-flash');
            return 'STREEET FLAAASH!!!'
        };
        if (isStreet){
            return 'Street mother fukker!!!';
        }

        switch (counter) {
            case 1: return 'one pare';
            case 2: return 'two pairs';
            case 3:  return 'set';
            case 4: return 'full house';
            case 5: return 'flash';
            case 7: return 'four cards';
            default: return 'no combination';
        }
    }
}

export default PokerHand;
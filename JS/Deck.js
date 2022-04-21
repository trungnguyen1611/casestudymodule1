class Deck {
    constructor() {
        this.cards = [];
    }

    create() {
        let value = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let suit = ['D', 'H', 'C', 'S'];
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < suit.length; j++) {
                let card = new Card(value[i], suit[j]);
                this.cards.push(card);
            }
        }
    }

    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            let rand = Math.floor(Math.random() * this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[rand];
            this.cards[rand] = temp;
        }
    }

    distribute(player) {
        for (let i = 0; i < 3; i++) {
            let card = this.cards.pop();
            player.hands.push(card);
        }
    }
}
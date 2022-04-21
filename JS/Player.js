class Player {
    constructor(name) {
        this.name = name;
        this.money = 1000;
        this.hands = [];
    }

    getScore() {
        let sum = 0;
        for (let i = 0; i < this.hands.length; i++) {
            sum += this.hands[i].value;
        }
        let score = sum % 10 === 0 ? 10 : sum % 10;
        return score;
    }

    showCards(display) {
        let html = '';
        for (let i = 0; i < this.hands.length; i++) {
            html += this.hands[i].getFront();
        }
        display.innerHTML = html;
    }

    hideCards(display) {
        let html = '';
        for (let i = 0; i < this.hands.length; i++) {
            html += this.hands[i].getBack();
        }
        display.innerHTML = html;
    }

    getValueHighestCard() {
        let suitIndex = ["S", "C", "H", "D"];
        let highestcard = this.hands[0];
        for (let i = 0; i < this.hands.length; i++) {
            if (suitIndex.indexOf(this.hands[i].suit) >= suitIndex.indexOf(highestcard.suit)) {
                if (this.hands[i].value > highestcard.value || suitIndex.indexOf(this.hands[i].suit) > suitIndex.indexOf(highestcard.suit)) {
                    highestcard = this.hands[i];
                }
            }
        }
        let value = 10 * suitIndex.indexOf(highestcard.suit) + highestcard.value;
        return value;
    }
}
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    getFront() {
        let html = `<img width="110px" src="images/${this.value + this.suit}.jpg">`;
        return html;
    }

    getBack() {
        let html = `<img width="110px" src="../images/cardback.jpeg">`;
        return html;
    }
}
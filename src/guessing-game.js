class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.curentGuessing = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.curentGuessing = Math.floor((this.min + this.max) / 2);
        return this.curentGuessing;
    }

    lower() {
        this.max = this.curentGuessing - 1;
    }

    greater() {
        this.min = this.curentGuessing +1;
    }
}

module.exports = GuessingGame;

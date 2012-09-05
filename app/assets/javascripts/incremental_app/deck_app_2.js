function Deck() {
  this.cards = [];

  for (var i = 0; i < 13; i++) {
    this.cards.push(new Card('heart', i));
  }
  for (i = 0; i < 13; i++) {
    this.cards.push(new Card('diamond', i));
  }
  for (i = 0; i < 13; i++) {
    this.cards.push(new Card('club', i));
  }

  for (i = 0; i < 13; i++) {
    this.cards.push(new Card('spade', i));
  }
}

function Card(suite, value) {
  this.suite = suite;
  this.value = value;
}

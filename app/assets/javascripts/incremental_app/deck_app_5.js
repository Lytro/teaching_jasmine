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

Deck.prototype.shuffle = function() {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < this.cards.length; j++) {
      var k = Math.floor(Math.random() * this.cards.length);
      var temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
  }
};

Deck.prototype.pickCard = function() {
  return this.cards[Math.floor((Math.random() * 52))];
};

Deck.prototype.throwCard = function() {
  var deck = this;

  $.ajax({
    url: 'card/throw.json',
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      deck.throwCardCallback(data);
    }
  });
};

Deck.prototype.throwCardCallback = function(data) {
};

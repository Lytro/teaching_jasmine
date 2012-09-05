describe("Deck", function () {
  var deck;

  beforeEach(function () {
    deck = new Deck();
  });

  it("builds a deck of 52 cards", function () {
    expect(deck.cards.length).toEqual(52);
  });

  it("has unique cards", function () {
    for (var i = 0; i < 52; i++) {
      for (var j = 0; j < 52; j++) {
        if (i != j) {
          expect(deck.cards[i]).not.toEqual(deck.cards[j]);
        }
      }
    }
  });

  describe("Card", function () {
    it("has a suite and value", function () {
      var card = new Card('heart', 3);

      expect(card.suite).toEqual('heart');
      expect(card.value).toEqual(3);
    });
  });
});

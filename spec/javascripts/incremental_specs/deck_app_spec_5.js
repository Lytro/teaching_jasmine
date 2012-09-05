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

  it("using magic, forces you to pick a certain card", function () {
    deck.shuffle();
    spyOn(deck, 'pickCard').andReturn(deck.cards[0]);

    var yourCard = deck.cards[0];
    deck.shuffle();

    expect(deck.pickCard()).toEqual(yourCard);
  });

  it("using magic, forces you to pick a certain card", function () {
    deck.shuffle();
    spyOn(deck, 'cards').andReturn(deck.cards[0]);

    var yourCard = deck.cards[0];
    deck.shuffle();

    expect(deck.cards[0]).toEqual(yourCard);
  });

  it("throws your card", function () {
    var jsonResponse = {
      suite: 'heart',
      value: '2'
    };

    spyOn($, 'ajax').andCallFake(function (options) {
      options.success(jsonResponse);
    });
    spyOn(deck, 'throwCardCallback');

    deck.throwCard();
    expect(deck.throwCardCallback).toHaveBeenCalled();
    expect(deck.throwCardCallback).toHaveBeenCalledWith(jsonResponse);
  });
});

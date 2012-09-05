describe("Deck", function () {
  it("builds a deck of 52 cards", function () {
    var deck = new Deck();

    expect(deck.cards.length).toEqual(52);
  });
});

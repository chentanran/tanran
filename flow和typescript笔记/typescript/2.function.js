"use strict";
var deck = {
    suits: ['黑', '红', '莓', '方'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickCard = cardPicker();
console.log(pickCard);

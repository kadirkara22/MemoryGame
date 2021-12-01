import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        items: [],
        cardImages: [
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png", matched: false },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png", matched: false },
        ],
        turn: 0,
        puan: 0,
        count: 0,
        selectOne: null,
        selectTwo: null,
        disabled: false,

    },
    reducers: {
        randomCards: (state, action) => {
            const cards = action.payload;
            const randomCards = [...state.cardImages, ...state.cardImages]
                .sort(() => Math.random() - 0.5)
                .map((card) => ({ ...card, id: Math.random() }))
            state.items = randomCards;
            state.puan = 0;
            state.turn = 0;
            state.count = 0;
        },
        selectedCard: (state, action) => {
            const selectCard = action.payload;
            state.items = state.items.find(item => item.src === selectCard.src)
                ? state.items.map(card => card.src === selectCard.src ? { ...card, matched: true } : card)
                : [...state.items]


        },
        selectOneCard: (state, action) => {
            const card = action.payload;
            state.selectOne = card
        },
        selectTwoCard: (state, action) => {
            const card = action.payload;
            state.selectTwo = card
        },
        resetTurn: (state, action) => {
            state.selectOne = null;
            state.selectTwo = null;

        },
        changeDisable: (state, action) => {
            const disabled = true
        },
        increasePuan: (state, action) => {
            const newPuan = state.puan + 50
            state.puan = newPuan
            state.turn = state.turn + 1
            state.count = state.count + 2

        },
        decreasePuan: (state, action) => {
            const newPuan = state.puan - 10
            state.puan = newPuan
            state.turn = state.turn + 1


        }
    }
});

export const { randomCards, selectOneCard, selectTwoCard, resetTurn, selectedCard, changeDisable, increasePuan, decreasePuan } = cardsSlice.actions;
export default cardsSlice.reducer;
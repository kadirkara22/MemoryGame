import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        items: [],
        cardImages: [
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png" },
            { src: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png" },
        ]
    },
    reducers: {
        randomCards: (state, action) => {
            const cards = action.payload;
            const randomCards = [...state.cardImages, ...state.cardImages]
                .sort(() => Math.random() - 0.5)
                .map((card) => ({ ...card, id: Math.random() }))
            state.items = randomCards;
        }
    }
});

export const { randomCards } = cardsSlice.actions;
export default cardsSlice.reducer;
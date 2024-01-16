import { reactive } from 'vue';

export const store = reactive({
    filmsApi: 'https://api.themoviedb.org/3/search/movie',
    tvSeriesApi: 'https://api.themoviedb.org/3/search/tv',
    keyApi: 'f5aea36f42793218ed4dd116daa37603',
    search: "",
    filmsShowed: [],
    seriesShowed: [],
    starArray: [],
    character_Array: []
})
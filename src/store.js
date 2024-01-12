import { reactive } from 'vue';

export const store = reactive({
    filmsApi: 'https://api.themoviedb.org/3/search/movie',
    keyApi: 'f5aea36f42793218ed4dd116daa37603',
    search: ""
})
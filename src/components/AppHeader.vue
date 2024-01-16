<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
    methods: {
        starVotegenerator(voteApi) {
            this.store.starArray = []
            let starVote = Math.round(voteApi / 2)
            for (let i = 0; i < starVote; i++) {
                this.store.starArray.push('<i class="fa-solid fa-star"></i>')
            }
            for (let i = 0; i < 5 - starVote; i++) {
                this.store.starArray.push('<i class="fa-regular fa-star"></i>')
            }

        },
        moviegenerator(element) {
            store.character_Array = []

            let UrlCastFilm = `https://api.themoviedb.org/3/movie/${element.id}/credits?api_key=${store.keyApi}`
            axios.get(UrlCastFilm).then((resp) => {
                let character_response = resp.data.cast;
                let actor_list = []

                character_response.forEach(element => {
                    actor_list.push(element.original_name)
                })

                store.character_Array = actor_list.slice(0, 5)

                let obj = {
                    title: element.title,
                    originalTitle: element.original_title,
                    language: element.original_language,
                    vote: store.starArray,
                    image: element.poster_path,
                    overview: element.overview,
                    characters: store.character_Array
                }
                this.store.filmsShowed.push(obj)
            })

        },
        findMovies() {
            this.store.filmsShowed = []
            this.store.seriesShowed = []

            let UrlFilmsComplete = `${store.filmsApi}?api_key=${store.keyApi}&query=${store.search}`
            axios.get(UrlFilmsComplete).then((response) => {

                let movies_response = response.data.results;
                movies_response.forEach(element => {

                    /*  use the star vote generator --> */
                    this.starVotegenerator(element.vote_average)
                    /* this.charactersmovie(element.id) */
                    /* create obj films */
                    this.moviegenerator(element)

                });

            })

            let UrlTvseriesComplete = `${store.tvSeriesApi}?api_key=${store.keyApi}&query=${store.search}`
            axios.get(UrlTvseriesComplete).then((response) => {

                let movies_response = response.data.results;
                movies_response.forEach(element => {

                    /*  use the star vote generator --> */
                    this.starVotegenerator(element.vote_average)
                    /* create obj series */

                    let obj = {
                        title: element.name,
                        originalTitle: element.original_name,
                        language: element.original_language,
                        vote: store.starArray,
                        image: element.poster_path,
                        overview: element.overview
                    }
                    this.store.seriesShowed.push(obj)
                });

            })
        }
    },

}
</script>

<template lang="">
    <header>
        <div class="container p-3">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="title w_auto">BOOLFLIX</div>
                <div class="w_auto">
                    <input class=" me-2 p-1" type="search" placeholder="Search" aria-label="Search" 
                    v-model="store.search" id="search"
                    @keyup.enter="findMovies">
                    <button class="btn btn-outline-danger" type="submit" @click="findMovies">Search</button>      
                </div>
            </div>
            
         </div>
    </header>
    
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as*;

header {
    background-color: black;

    .title {
        color: $color_red;
        font-weight: bolder;
        font-size: xx-large;
    }
}
</style>
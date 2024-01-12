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
        findFilms() {
            let UrlFilmsComplete = `${store.filmsApi}?api_key=${store.keyApi}&query=${store.search}`
            axios.get(UrlFilmsComplete).then((response) => {
                this.store.filmsShowed = response.data.results

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
                    @keyup.enter="findFilms">
                    <button class="btn btn-outline-danger" type="submit" @click="findFilms">Search</button>      
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